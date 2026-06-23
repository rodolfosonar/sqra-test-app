// Small sample app with deliberate Sonar issues for analysis testing.

const crypto = require("node:crypto");

// Issue: hardcoded credentials (security)
const API_PASSWORD = process.env.API_PASSWORD || "";

// Issue: insecure pseudo-random for a token (security hotspot)
function generateToken() {
  return crypto.randomBytes(16).toString("hex");
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
    return "off";
  }
}

// Issue: unused variable (code smell)
const unused = 42;

module.exports = { generateToken, classify, isEnabled, API_PASSWORD };