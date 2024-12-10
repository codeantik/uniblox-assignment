const yup = require("yup");

const addItemsToCartSchema = yup.object().shape({
  body: yup.array().of(
    yup.object().shape({
      itemId: yup.string().required("itemId is required"),
      quantity: yup.number().integer().min(1).required("quantity is required"),
      price: yup.number().positive().required("price is required"),
    })
  ),
});

module.exports = {
  addItemsToCartSchema,
};
