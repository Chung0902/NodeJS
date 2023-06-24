const express = require('express');
const router = express.Router();

const { Product } = require('../models');

// Tìm kiếm sản phẩm có giá lớn hơn 300 (1 sản phẩm duy nhất)
router.get('/test', async (req, res, next) => {
  const conditionFind = {
    price : { $gt : 300}
  }

  try {
    //sort ---> tìm kiếm sản phẩm(1:sắp xếp từ nhỏ đến lớn ; -1: ngược lại)
    let results = await Product.findOne(conditionFind).sort({ price: -1 });

    return res.send({ code: 200, payload: results });
  } catch (err) {
    return res.status(500).json({ code: 500, error: err });
  }
});

//Hiển thị tất cả các mặt hàng có giảm giá <= 10%
// router.get('/1a', async (req, res, next) => {

//   const conditionFind = {   
//     discount : { $lt : 10}
//   }

//   try {
//     //sort ---> tìm kiếm sản phẩm(1:sắp xếp từ nhỏ đến lớn ; -1: ngược lại)
//     let results = await Product.find(conditionFind).sort({ discount: 1 });
//     let total = await Product.countDocuments();

//     return res.send({ code: 200,total, totalResult: results.length, payload: results});
//   } catch (err) {
//     return res.status(500).json({ code: 500, error: err });
//   }
// });


module.exports = router;
