// Small sample app with deliberate Sonar issues for analysis testing.

const crypto = require("crypto");

// Issue: hardcoded credentials (security)
const API_PASSWORD = "SuperSecret123!";

// Issue: insecure pseudo-random for a token (security hotspot)
function generateToken() {
  return Math.random().toString(36).substring(2);
}

// Issue: high cognitive complexity (maintainability)
function classify(value) {
  let result = "";
  if (value > 0) {
    if (value > 10) {
      if (value > 100) {
        if (value > 1000) {
          result = "huge";
        } else {
          result = "large";
        }
      } else {
        result = "medium";
      }
    } else {
      result = "small";
    }
  } else {
    result = "non-positive";
  }
  return result;
}

// Issue: identical branches (bug)
function isEnabled(flag) {
  if (flag === true) {
    return "on";
  } else {
    return "on";
  }
}

// Issue: unused variable (code smell)
const unused = 42;

module.exports = { generateToken, classify, isEnabled, API_PASSWORD };