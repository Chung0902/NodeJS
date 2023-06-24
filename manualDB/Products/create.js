const { default: mongoose } = require("mongoose");
const { Product } = require("../../models");

mongoose.connect("mongodb://127.0.0.1:27017/batch-nodejs-database");

try {
  const data = {
    name: "Bánh canh",
    price: 50000,
    discount: 10,
    stock: 98,
    categoryId: "647c0cc17a9b8ab3969db911",
    supplierId: "647c2fc31d4beb98c47c4ecf",
  };

  const newData = new Product(data);

  newData.save().then((result) => {
    console.log("««««« result »»»»»", result);
  });
} catch (err) {
  console.log("««««« err »»»»»", err);
}
