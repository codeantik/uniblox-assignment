const { cart, discountCodes, orders } = require("../db/store");

class CheckoutService {
  static async checkout(discountCode) {
    if (cart.length === 0) {
      throw new Error("Cannot Procced with Checkout. Cart is empty!");
    }

    let total = cart.reduce(
      (amount, item) => amount + item.price * item.quantity,
      0
    );
    const code = discountCodes.find((dc) => dc.discountCode === discountCode);
    let discount = 0;

    if (code.isApplied) {
      console.error(
        "This discount code has already been applied on another order."
      );
    } else {
      discount = (code.discountPercent / 100) * total;
      total -= discount;
      code.isApplied = true;
    }

    const orderId = `UNIBLOX_ORDER_${orders.length + 1}`;
    orders.push({
      orderId,
      items: cart,
      totalAmount: total,
      discountCode,
      discountAmount: discount,
    });

    cart = [];

    return { orderId, totalAmount: total, discountAmount: discount };
  }
}

module.exports = CheckoutService;
