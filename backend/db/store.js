const orders = []; // { orderId, items, totalAmount, discountCode, discountAmount}

const discountCodes = []; // { discountCode, discountAmount } // stores all the applied discount codes

const nthDiscountOrder = 3; // The nth order to which the discount is eligible. Hardcoded: Every 3rd order in this case

const store = {
  orders,
  discountCodes,
  nthDiscountOrder,
};

module.exports = store;
