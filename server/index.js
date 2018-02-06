const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const parseString = require('xml2json').parseString

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
  const options = {
    method: 'GET',
    url: 'https://www.goodreads.com/search/index.xml',
    qs: { key: 'Ya50zfsGd2qjCZfprdN5BQ', q: 'Ender%27s+Game' }
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log('SERVER error: ' + error);
    } else {
      parseString(body, function (err, result) {
        const books = Object.keys(result.GoodreadsResponse.Request);
        const books2 = Object.keys(result.GoodreadsResponse.search);
        console.log('TITLE: ' + books + 'AUTHOR: ' + books2);
        console.log(result);
      });
    }
  })
  
  
  // $http({
  //   method: 'GET',
  //   url: 'https://www.goodreads.com/search',
  //   params: {
  //     key: process.env.key,
  //     q: 'history',
  //     part: 'best_book',
  //     maxResults: 5,
  //     type: 'Book'
  //   }
  // })
  // .then(books => {
  //   console.log(books);
  // })
})