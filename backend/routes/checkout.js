const express = require("express");
const validate = require("../middlewares/validate");
const checkoutController = require("../controllers/checkoutController");
const { checkoutSchema } = require("../validations/checkout.validation");

const router = express.Router();

router.route("/").post(validate(checkoutSchema), checkoutController.checkout);

module.exports = router;
