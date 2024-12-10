const { cart } = require("../db/store");

class CartService {
  static async getCart() {
    return cart;
  }
  static async addItemsToCart(payload) {
    cart.push(...payload);
    return this.getCart();
  }
}

module.exports = CartService;
