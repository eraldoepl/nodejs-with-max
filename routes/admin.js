const path = require("path");
const express = require("express");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product.pug", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
  // res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
