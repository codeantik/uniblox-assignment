const express = require("express");
const { generateDiscountCode, getStoreStats } = require("../controllers/adminController");

const router = express.Router();

router.post("/generate-discount-code", generateDiscountCode);
router.get("/store/stats", getStoreStats);

module.exports = router;
