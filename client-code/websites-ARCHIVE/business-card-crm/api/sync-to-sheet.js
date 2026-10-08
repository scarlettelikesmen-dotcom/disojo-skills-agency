/**
 * sync-to-sheet.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Posts contact data (including base64 card image) to a Google Apps Script
 * Web App, which handles:
 *   1. Uploading the card image to Google Drive
 *   2. Appending all fields + the Drive image link to Google Sheets
 *
 * ─── SETUP (one-time) ────────────────────────────────────────────────────────
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Replace ALL code with the script below, then Deploy → New Deployment
 *    → Web App → Execute as: Me → Who has access: Anyone → Deploy → Copy URL
 * 3. In Vercel → Settings → Environment Variables → Add:
 *      APPS_SCRIPT_URL = <paste URL>
 *    Then Save (no redeploy needed).
 *
 * ─── APPS SCRIPT CODE (paste this into script.google.com) ───────────────────
 *
 * var DRIVE_FOLDER_ID = '16Xw_f6w51Rxgp_rj-HERird_02MvbhpU';
 *
 * function doPost(e) {
 *   try {
 *     var data = JSON.parse(e.postData.contents);
 *     var contact = data.contact;
 *     var p = contact.primaryContact || {};
 *     var s = contact.secondaryContact || {};
 *
 *     // 1. Upload image to Drive
 *     var imageLink = '';
 *     if (contact.imageUrl && contact.imageUrl.indexOf('base64,') > -1) {
 *       try {
 *         var base64 = contact.imageUrl.split('base64,')[1];
 *         var blob = Utilities.newBlob(
 *           Utilities.base64Decode(base64),
 *           'image/jpeg',
 *           'Card_' + (contact.organizationName || 'Unknown') + '_' + Date.now() + '.jpg'
 *         );
 *         var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
 *         var file = folder.createFile(blob);
 *         file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
 *         imageLink = file.getUrl();
 *       } catch (imgErr) {
 *         Logger.log('Drive upload failed: ' + imgErr.message);
 *       }
 *     }
 *
 *     // 2. Append row to sheet
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 *
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow([
 *         'Timestamp', 'Lead Owner', 'Status', 'Source', 'Request Type', 'Campaign Name', 'Territory', 'Market Segment',
 *         'Organization', 'Website', 'Industry', 'Annual Revenue', 'No of Employees',
 *         'City', 'State/Province', 'Country', 'Address',
 *         'Salutation', 'Gender', 'First Name', 'Middle Name', 'Last Name', 'Job Title', 'Email', 'Mobile No', 'Phone', 'Phone Ext', 'WhatsApp', 'Fax',
 *         '2nd Salutation', '2nd Gender', '2nd First Name', '2nd Middle Name', '2nd Last Name', '2nd Job Title', '2nd Email', '2nd Mobile', '2nd Phone', '2nd Phone Ext', '2nd WhatsApp', '2nd Fax',
 *         'Lead Type', 'Customer Group', 'Supplier Group', 'Image Link'
 *       ]);
 *     }
 *
 *     sheet.appendRow([
 *       new Date().toISOString(),
 *       contact.leadOwner||'', contact.status||'', contact.source||'', contact.requestType||'', contact.campaignName||'', contact.territory||'', contact.marketSegment||'',
 *       contact.organizationName||'', contact.website||'', contact.industry||'', contact.annualRevenue||'', contact.noOfEmployees||'',
 *       contact.city||'', contact.stateProvince||'', contact.country||'', contact.address||'',
 *       p.salutation||'', p.gender||'', p.firstName||'', p.middleName||'', p.lastName||'', p.jobTitle||'', p.email||'', p.mobileNo||'', p.phone||'', p.phoneExt||'', p.whatsapp||'', p.fax||'',
 *       s.salutation||'', s.gender||'', s.firstName||'', s.middleName||'', s.lastName||'', s.jobTitle||'', s.email||'', s.mobileNo||'', s.phone||'', s.phoneExt||'', s.whatsapp||'', s.fax||'',
 *       contact.leadType||'', contact.customerGroup||'', contact.supplierGroup||'',
 *       imageLink
 *     ]);
 *
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ success: true, imageLink: imageLink }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *
 *   } catch (err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ success: false, error: err.message }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { contact } = req.body;
    if (!contact) {
      return res.status(400).json({ error: 'Missing contact data' });
    }

    const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

    if (!APPS_SCRIPT_URL) {
      console.warn('[sync-to-sheet] APPS_SCRIPT_URL not set — sync skipped.');
      return res.status(200).json({ success: true, message: 'Sync skipped — APPS_SCRIPT_URL not configured' });
    }

    // Fix Google Sheets formula error for phone numbers starting with "+"
    // We prepend an apostrophe (') so Google Sheets treats it as raw text
    const formatPhone = (val) => val && typeof val === 'string' && (val.startsWith('+') || val.startsWith('=')) ? `'${val}` : val;
    
    // Normalize phone to clean 10-digit Indian number
    // +91 98765 43210 → 9876543210, 09876543210 → 9876543210, 98765-43210 → 9876543210
    const cleanPhone = (val) => {
      if (!val || typeof val !== 'string') return '';
      let digits = val.replace(/[^0-9]/g, ''); // strip everything except digits
      // Remove Indian country code prefixes
      if (digits.startsWith('91') && digits.length > 10) digits = digits.slice(2);
      if (digits.startsWith('0') && digits.length > 10) digits = digits.slice(1);
      // Take last 10 digits if still too long
      if (digits.length > 10) digits = digits.slice(-10);
      return digits;
    };
    
    const formattedContact = { ...contact, contactId: contact.id };
    ['primaryContact', 'secondaryContact'].forEach(cType => {
      if (formattedContact[cType]) {
        formattedContact[cType] = { ...formattedContact[cType] };
        // Generate clean versions of phone fields
        formattedContact[cType].mobileNoClean = cleanPhone(formattedContact[cType].mobileNo);
        formattedContact[cType].phoneClean = cleanPhone(formattedContact[cType].phone);
        // Format raw phone fields for Google Sheets (apostrophe prefix for +)
        ['mobileNo', 'phone', 'phoneExt', 'whatsapp', 'fax'].forEach(field => {
          if (formattedContact[cType][field]) {
            formattedContact[cType][field] = formatPhone(formattedContact[cType][field]);
          }
        });
      }
    });

    // Forward contact (including base64 imageUrl) to the Apps Script.
    // The script handles Drive upload + Sheet append/update in one call.
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact: formattedContact }),
      redirect: 'follow',
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = { raw: text };
    }

    if (result.success === false) {
      console.error('[sync-to-sheet] Apps Script error:', result.error);
    } else {
      console.log('[sync-to-sheet] Success. Image link:', result.imageLink || 'none');
    }

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('[sync-to-sheet] Fetch error:', error);
    return res.status(200).json({ success: false, error: error.message });
  }
}
