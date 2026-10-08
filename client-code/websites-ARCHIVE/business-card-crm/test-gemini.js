async function test() {
  const apiKey = "AQ.Ab8RN6KK7mvBC3Fu02CEocxfKtqui04-vNtX9jfHCU0xZO80jw";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  const payload = {
    contents: [{
      parts: [
        { text: "Return a JSON object with name='Test'" },
        { inlineData: { mimeType: 'image/png', data: base64Data } }
      ]
    }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      return;
    }

    const data = await response.json();
    console.log("Success! Data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

test();
