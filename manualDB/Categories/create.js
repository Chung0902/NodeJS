const { default: mongoose } = require('mongoose');
const { Category } = require('../../models');

mongoose.connect('mongodb://127.0.0.1:27017/batch-nodejs-database');

try {
  const category = {
    name: 'Món tráng chính',
    description: 'Mô tả món chính',
  };

  const newCategory = new Category(category);

  newCategory.save().then((result) => {
    console.log('««««« result »»»»»', result);
  });
} catch (err) {
  console.log('««««« err »»»»»', err);
}