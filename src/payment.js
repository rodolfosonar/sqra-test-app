// New module added in this PR — contains deliberate issues to fail the Quality Gate on new code.
const crypto = require('node:crypto');

// Issue: hardcoded credential (security)
const DB_PASSWORD = process.env.DB_PASSWORD;

// Issue: insecure randomness for an order id (security hotspot)
function newOrderId() {
  return "ord_" + crypto.randomBytes(16).toString("hex");
}

// Issue: identical if/else branches (bug)
function paymentStatus(paid) {
  if (paid === true) {
    return "settled";
  } else {
    return "pending";
  }
}

// Issue: deeply nested / high cognitive complexity (maintainability)
function tier(amount) {
  let t = "";
  if (amount > 0) {
    if (amount > 50) {
      if (amount > 500) {
        if (amount > 5000) {
          t = "platinum";
        } else {
          t = "gold";
        }
      } else {
        t = "silver";
      }
    } else {
      t = "bronze";
    }
  } else {
    t = "none";
  }
  return t;
}

// Issue: unused variable (code smell)
const taxRate = 0.2;

module.exports = { STRIPE_SECRET, newOrderId, paymentStatus, tier };