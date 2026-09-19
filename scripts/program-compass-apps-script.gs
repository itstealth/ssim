/**
 * program-compass-apps-script.gs
 *
 * Google Apps Script backend for the Program Compass assessment. Bound to a
 * Google Sheet, deployed as a Web App, it appends one row per submission to a
 * "Responses" tab.
 *
 * This is a rewrite — the original apps-script-backend.gs was not included in
 * the files handed over, so this reconstructs the same contract from the
 * payload the site now sends. It is written to be idempotent on the header row
 * and safe to re-paste over an existing deployment.
 *
 * ---------------------------------------------------------------------------
 * DEPLOYING (only needed if the existing webhook is ever replaced)
 * ---------------------------------------------------------------------------
 *   1. Open the response Sheet → Extensions → Apps Script.
 *   2. Replace the editor contents with this file.
 *   3. Deploy → Manage deployments → (existing) → Edit → Deploy.
 *      Editing the EXISTING deployment keeps the same /exec URL. Creating a
 *      "New deployment" mints a different URL and silently breaks the site
 *      until PROGRAM_COMPASS_WEBHOOK_URL is updated to match.
 *   4. Execute as: Me · Who has access: Anyone.
 *   5. If the URL changed, update the PROGRAM_COMPASS_WEBHOOK_URL app setting
 *      on the Azure Web App (it is read server-side only, never by the browser).
 *
 * "Who has access: Anyone" lets the site POST without a Google login. It does
 * not make the Sheet's contents public — the Sheet stays private to the Drive
 * account that owns it.
 */

var SHEET_NAME = 'Responses';

var HEADERS = [
  'ID',
  'Timestamp (IST)',
  'Name',
  'Phone',
  'Email',
  'Current College',
  'Degree',
  'Graduating',
  'Source College',
  'Channel',
  'Consent',
  'R',
  'I',
  'A',
  'S',
  'E',
  'C',
  'Top Code',
  'Program 1',
  'Match 1 (%)',
  'Program 2',
  'Match 2 (%)',
  'Program 3',
  'Match 3 (%)',
  'Work Style (data)',
  'Work Style (ambiguity)',
  'Work Style (risk)',
  'Work Style (team)',
  'Work Style (persuasion)',
  'Work Style (detail)'
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    appendResponse(payload);
    return jsonOut({ success: true });
  } catch (err) {
    // Logged to Executions in the Apps Script editor — check there first when
    // rows stop appearing.
    console.error('Program Compass write failed: ' + err);
    return jsonOut({ success: false, error: String(err) });
  }
}

/** Lets you confirm the deployment is live by opening the /exec URL in a browser. */
function doGet() {
  return jsonOut({ status: 'ok', service: 'Program Compass response collector' });
}

function appendResponse(record) {
  var sheet = getSheet();
  var scores = record.scores || record.dimScore || {};
  var workStyle = record.workStyle || {};
  var ranked = record.ranked || [];

  sheet.appendRow([
    record.id || '',
    formatIst(record.timestamp),
    record.name || '',
    // Leading apostrophe stops Sheets from reading a phone number as a numeric
    // value and stripping a leading zero or switching to scientific notation.
    record.phone ? "'" + record.phone : '',
    record.email || '',
    record.currentCollege || '',
    record.degree || '',
    record.gradYear || '',
    record.sourceCollege || '',
    record.channel || '',
    record.consent ? 'Yes' : 'No',
    round2(scores.R),
    round2(scores.I),
    round2(scores.A),
    round2(scores.S),
    round2(scores.E),
    round2(scores.C),
    record.topCode || '',
    ranked[0] ? ranked[0].program : '',
    ranked[0] ? ranked[0].match : '',
    ranked[1] ? ranked[1].program : '',
    ranked[1] ? ranked[1].match : '',
    ranked[2] ? ranked[2].program : '',
    ranked[2] ? ranked[2].match : '',
    round2(workStyle.data),
    round2(workStyle.ambiguity),
    round2(workStyle.risk),
    round2(workStyle.team),
    round2(workStyle.persuasion),
    round2(workStyle.detail)
  ]);
}

/** Returns the Responses tab, creating and formatting it on first use. */
function getSheet() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#6B21A8')
      .setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function formatIst(iso) {
  if (!iso) return '';
  try {
    return Utilities.formatDate(new Date(iso), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
  } catch (err) {
    return iso;
  }
}

function round2(value) {
  return typeof value === 'number' ? Math.round(value * 100) / 100 : '';
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
