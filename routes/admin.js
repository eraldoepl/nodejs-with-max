const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

router.get("/", productsController.getProducts);

router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProducts);
router.put("/add-product", productsController.putProduct);

module.exports = router;
