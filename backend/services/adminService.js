const { discountCodes, orders } = require("../db/store");

class AdminService {
  static createDiscountCode(discountPercent) {
    // prefix(UNIBLOX_DISCOUNT_) + generates a random 6 digit alphanumeric code
    const discountCode = `UNIBLOX_DISCOUNT_${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

    discountCodes[discountCode] = {
      discountPercent,
      isApplied: false,
    };
    return { discountCode, discountPercent };
  }

  static getStoreStats() {
    // total items purchased
    const totalItemsPurchased = orders.reduce(
      (items, order) => items + order.items.length,
      0
    );

    // total purchase amount
    const totalPurchaseAmount = orders.reduce(
      (amount, order) => amount + order.totalAmount,
      0
    );

    // list of discount codes
    const discountCodes = [
      ...orders.map((order) => !!order.discountCode).filter(Boolean),
    ];

    // total discount amount
    const totalDiscountAmount = orders.reduce(
      (amount, order) => amount + order.discountAmount,
      0
    );

    return {
      totalItemsPurchased,
      totalPurchaseAmount,
      discountCodes,
      totalDiscountAmount,
    };
  }
}

module.exports = AdminService
