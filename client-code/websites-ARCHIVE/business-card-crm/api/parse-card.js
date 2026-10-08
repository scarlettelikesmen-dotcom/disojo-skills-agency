
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { imageBase64, imageBase64Back } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'Missing image data' });
    }

    const isTwoSide = !!imageBase64Back;

    // ─── PROMPT ───────────────────────────────────────────────────────────────
    // Tuned for maximum extraction accuracy across diverse real-world cards.
    const rules = `
RULES (follow strictly):
- Extract EXACT text as printed; do NOT correct spelling, hallucinate, or guess missing info.
- primaryContact / secondaryContact: Extract the first person as primary, and the second person as secondary (if present). If only one person is on the card, leave secondaryContact completely blank/null.
- "salutation": Formal title if present (Mr., Mrs., Ms., Dr., Prof., Eng., CA, etc.). Leave blank if none.
- "firstName", "middleName", "lastName", "fullName", "jobTitle", "email", "mobileNo", "phone", "phoneExt", "whatsapp", "fax" for each contact.
- CRITICAL FOR PHONES: Do NOT reformat phone numbers. If there is a plus sign (+) or country code, KEEP IT EXACTLY as printed. Do not add spaces or dashes that are not there.
- "organizationName": The exact company or brand name.
- "website": Full URL exactly as printed.
- "city", "stateProvince", "country": Parse accurately from the address. Do NOT guess the country if it is not printed.
- "address": The full raw address line precisely as printed.

Return ONLY a raw JSON object with this exact schema:
{
  "isCard": true,
  "organizationName": "",
  "website": "",
  "city": "",
  "stateProvince": "",
  "country": "",
  "address": "",
  "primaryContact": {
    "salutation": "", "firstName": "", "middleName": "", "lastName": "", "fullName": "", "jobTitle": "", "email": "", "mobileNo": "", "phone": "", "phoneExt": "", "whatsapp": "", "fax": ""
  },
  "secondaryContact": null
}
`;

    const prompt = isTwoSide
      ? `You are a world-class OCR engine specialised in business card data extraction.
You have been given TWO images: the FRONT and BACK of the same business card.
STEP 1 — If neither image shows a business card, return: {"isCard":false}
STEP 2 — Extract ALL contact information visible across BOTH sides and merge it into one record.
${rules}`
      : `You are a world-class OCR engine specialised in business card data extraction.
STEP 1 — If the image does NOT show a business card, return: {"isCard":false}
STEP 2 — Extract all contact information from the business card.
${rules}`;

    // ─── BUILD MESSAGE CONTENT ────────────────────────────────────────────────
    const frontBase64 = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;
    const contentParts = [
      { type: 'text', text: prompt },
      {
        type: 'image_url',
        image_url: {
          url: `data:image/jpeg;base64,${frontBase64}`,
          detail: 'high' // Use high-detail mode for maximum OCR accuracy
        }
      }
    ];

    if (isTwoSide) {
      const backBase64 = imageBase64Back.includes(',') ? imageBase64Back.split(',')[1] : imageBase64Back;
      contentParts.push({
        type: 'image_url',
        image_url: {
          url: `data:image/jpeg;base64,${backBase64}`,
          detail: 'high'
        }
      });
    }

    // ─── CALL OPENAI ──────────────────────────────────────────────────────────
    const apiKey = process.env.OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';

    const payload = {
      model: 'gpt-5.4-nano',      // Cost-efficient extraction model — optimized for data extraction
      messages: [{ role: 'user', content: contentParts }],
      // No response_format — not supported by all models; we parse JSON from text instead
      max_completion_tokens: 512,
      temperature: 0             // Zero temperature = deterministic, most accurate output
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', response.status, errorText);
      // Return 200 with error details so frontend can show us exactly what failed
      return res.status(200).json({ isCard: false, _error: errorText, _status: response.status });
    }

    const data = await response.json();
    let rawText = data.choices?.[0]?.message?.content;

    if (!rawText) {
      throw new Error('No text returned from OpenAI API');
    }

    // Robust JSON extraction — handles markdown code fences, leading text, etc.
    rawText = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    // If model wrapped the JSON in prose, extract just the JSON object
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (jsonMatch) rawText = jsonMatch[0];

    const parsedData = JSON.parse(rawText);

    const emptyContact = {
      salutation: '', firstName: '', middleName: '', lastName: '', fullName: '', jobTitle: '', email: '', mobileNo: '', phone: '', phoneExt: '', whatsapp: '', fax: ''
    };

    // Sanitise: ensure all expected keys exist
    const result = {
      isCard:           parsedData.isCard !== false,
      organizationName: parsedData.organizationName || '',
      website:          parsedData.website || '',
      city:             parsedData.city || '',
      stateProvince:    parsedData.stateProvince || '',
      country:          parsedData.country || '',
      address:          parsedData.address || '',
      primaryContact:   { ...emptyContact, ...parsedData.primaryContact },
      secondaryContact: parsedData.secondaryContact ? { ...emptyContact, ...parsedData.secondaryContact } : null,
      _model:           data.model || 'unknown',
    };

    return res.status(200).json(result);

  } catch (error) {
    console.error('Error parsing card:', error);
    return res.status(500).json({ error: 'Failed to process image', details: error.message });
  }
}
