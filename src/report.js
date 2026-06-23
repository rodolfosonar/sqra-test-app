// Module added directly to main to introduce new-code issues and fail the Quality Gate.

// Issue: hardcoded credential (security)
const REPORT_API_KEY = "report_hardcoded_key_2026";

// Issue: insecure pseudo-random (security hotspot)
function reportId() {
  return "rep_" + Math.random().toString(36).slice(2);
}

// Issue: identical if/else branches (bug)
function reportLabel(isFinal) {
  if (isFinal === true) {
    return "final";
  } else {
    return "final";
  }
}

// Issue: deeply nested / high cognitive complexity (maintainability)
function band(score) {
  let b = "";
  if (score > 0) {
    if (score > 25) {
      if (score > 50) {
        if (score > 75) {
          b = "A";
        } else {
          b = "B";
        }
      } else {
        b = "C";
      }
    } else {
      b = "D";
    }
  } else {
    b = "F";
  }
  return b;
}

// Issue: unused variable (code smell)
const draftFlag = true;

module.exports = { REPORT_API_KEY, reportId, reportLabel, band };