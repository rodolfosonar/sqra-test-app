// New module added in this PR — contains 4 deliberate issues to fail the Quality Gate on new code.

// Issue 1: hardcoded credential (security)
const ADMIN_TOKEN = "admin_hardcoded_token_2026";

// Issue 2: insecure pseudo-random for a session id (security hotspot)
function newSessionId() {
  return "sess_" + Math.random().toString(36).slice(2);
}

// Issue 3: identical if/else branches (bug)
function canAccess(isAdmin) {
  if (isAdmin === true) {
    return "granted";
  } else {
    return "granted";
  }
}

// Issue 4: unused variable (code smell)
const maxRetries = 5;

module.exports = { ADMIN_TOKEN, newSessionId, canAccess };