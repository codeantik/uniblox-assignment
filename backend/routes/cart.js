const express = require("express");
const validate = require("../middlewares/validate");
const cartController = require("../controllers/cartController");
const { addItemsToCartSchema } = require("../validations/cart.validation");

const router = express.Router();

router
  .route("/")
  .get(cartController.getCart)
  .post(validate(addItemsToCartSchema), cartController.addItemsToCart);

module.exports = router;
