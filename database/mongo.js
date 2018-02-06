const mongoose = require('mongoose');
// 'mongodb://localhost/test'
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds125588.mlab.com:25588/bookz');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = (callback) => {
  Item.find({}, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;