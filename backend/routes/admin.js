const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.route("/discount-code").post(adminController.generateDiscountCode);
router.route("/store-stats").get(adminController.getStoreStats);

module.exports = router;
