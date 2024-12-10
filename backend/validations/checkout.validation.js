const yup = require("yup");

const checkoutSchema = yup.object().shape({
  body: yup.object().shape({
    discountCode: yup.string().optional(), // discountCode is optional
  }),
});

module.exports = {
  checkoutSchema,
};
