const CheckoutService = require("../services/checkoutService");
const catchAsync = require("../utils/catchAsync");

const checkout = catchAsync((req, res) => {
  const { discountCode } = req.body;
  const result = CheckoutService.checkout(discountCode);
  res.status(200).send(result);
});

module.exports = {
  checkout,
};
