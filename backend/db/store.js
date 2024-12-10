const cart = []; // { itemId, quantity, price }

const orders = []; // { orderId, items, totalAmount, discountCode, discountAmount}

const discountCodes = []; // { discountCode, isApplied, discountPercent }} // stores all the applied discount codes

const nthDiscountOrder = 3; // The nth order to which the discount is eligible. Hardcoded: Every 3rd order in this case

const store = {
  cart,
  orders,
  discountCodes,
  nthDiscountOrder,
};

module.exports = store;
