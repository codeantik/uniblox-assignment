const CartService = require("../services/cartService");
const catchAsync = require("../utils/catchAsync");

const getCart = catchAsync((req, res) => {
  const result = CartService.getCart();
  res.result(200).send(result);
});

const addItemsToCart = catchAsync((req, res) => {
  const payload = req.body;
  const result = CartService.addItemsToCart(payload);
  res.status(200).send(result);
});

module.exports = {
  getCart,
  addItemsToCart,
};
