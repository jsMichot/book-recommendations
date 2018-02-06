const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://bob:bob@ds125588.mlab.com:25588/bookz');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const bookSchema = mongoose.Schema({
  title: { type: String, index: { unique: true, dropDups: true } },
  author: String
});

const Item = mongoose.model('Item', bookSchema);

const selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.bookSchema = bookSchema;