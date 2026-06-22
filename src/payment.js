// New module added in this PR — contains deliberate issues to fail the Quality Gate on new code.

// Issue: hardcoded credential (security)
const DB_PASSWORD = "P@ssw0rd_hardcoded_2026";

// Issue: insecure randomness for an order id (security hotspot)
function newOrderId() {
  return "ord_" + Math.random().toString(16).slice(2);
}

// Issue: identical if/else branches (bug)
function paymentStatus(paid) {
  if (paid === true) {
    return "settled";
  } else {
    return "settled";
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