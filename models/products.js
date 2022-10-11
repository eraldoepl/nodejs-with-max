const fs = require("fs");
const path = require("path");

const products = [];
const productsFile = path.join(__dirname, "..", "data", "products.json");

const getProductFromFile = (callback) => {
  fs.readFile(productsFile, (err, fileContent) => {
    if (err) return callback([]);
    callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(productsFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductFromFile(callback);
  }
};
