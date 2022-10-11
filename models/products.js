const fs = require("fs");
const path = require("path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const productsFile = path.join(__dirname, "..", "data", "products.json");

    fs.readFile(productsFile, (err, fileContent) => {
      let products = [];
      if (!err) products = JSON.parse(fileContent);

      products.push(this);
      fs.writeFile(productsFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const productsFile = path.join(__dirname, "..", "data", "products.json");
    fs.readFile(productsFile, (err, fileContent) => {
      if (err) return callback([]);
      return callback(JSON.parse(fileContent));
    });
  }
};
