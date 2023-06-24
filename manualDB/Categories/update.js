const { default: mongoose } = require('mongoose');
const { Category } = require('../../models');

mongoose.connect('mongodb://127.0.0.1:27017/batch-29-30-database');

try {
  const id = '647c0cc17a9b8ab3969db911';

  const data = { name: 'Món khai vị' };

  Category.findByIdAndUpdate(id, data, {
    new: true,
  }).then((result) => {
    console.log(result);
  });
} catch (err) {
  console.log(err);
}