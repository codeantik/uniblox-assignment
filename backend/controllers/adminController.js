const catchAsync = require("../utils/catchAsync");
const adminConstants = require("../constants/admin.constant");
const { orders, nthDiscountOrder } = require("../db/store");
const AdminService = require("../services/adminService");

const generateDiscountCode = catchAsync((req, res) => {
  const totalOrders = orders.length;
  if ((totalOrders + 1) % nthDiscountOrder === 0) {
    const discountCode = AdminService.createDiscountCode(
      adminConstants.DISCOUNT_PERCENT
    );
    res
      .status(201)
      .send({ message: "Discount Code generated successfully", discountCode });
  }

  res.status(200).send({ message: "Discount not applicable for this order" });
});

const getStoreStats = catchAsync((req, res) => {
  const storeStats = AdminService.getStoreStats();
  res.status(200).send(storeStats);
});

module.exports = {
  generateDiscountCode,
  getStoreStats,
};
