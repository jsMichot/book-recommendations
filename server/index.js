const express = require('express');
const bodyParser = require('body-parser');

const items = require('../database-mongo');

const app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.post('/books', (req, res) => {
  res.send('this feature is currently being created')
})

app.get('/books', (req, res) => {
  $http({
    method: 'GET',
    url: 'https://www.goodreads.com/search',
    params: {
      key: window.GOODREADS_API_KEY,
      q: options.query || 'history',
      part: 'best_book',
      maxResults: 5,
      type: 'Book'
    }
  })
  .then(books => {
    console.log(books);
  })
})