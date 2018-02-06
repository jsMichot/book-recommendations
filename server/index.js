const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const {parseString} = require('xml2js');

const items = require('../database-mongo');

const app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.use(bodyParser.json());
const jsonParser = bodyParser.json();

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
  const options = {
    method: 'GET',
    url: 'https://www.goodreads.com/search/index.xml',
    qs: { key: 'Ya50zfsGd2qjCZfprdN5BQ', q: req.body.q }
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log('SERVER error: ' + error);
    } else {
      // const json = parser.toJSON(body);
      parseString(body, (err, result) => {
        const results = result.GoodreadsResponse.search[0].results[0].work.reduce((books, book) => {
          books.push({ title: book.best_book[0].title[0], author: book.best_book[0].author[0].name[0] });
          return books;
        }, [])
        res.send(results);
        /*
        Results Array: GoodreadsResponse.search[0].results[0].work
        Title: Results[i].best_book[0].title[0]
        Author: Results[i].best_book[0].author[0].name[0]
        */
      });
    }
  })
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
      // const json = parser.toJSON(body);
      parseString(body, (err, result) => {
        const results = result.GoodreadsResponse.search[0].results[0].work.reduce((books, book) => {
          books.push({ title: book.best_book[0].title[0], author: book.best_book[0].author[0].name[0]});
          return books;
        }, [])
        res.send(results);
        /*
        Results Array: GoodreadsResponse.search[0].results[0].work
        Title: Results[i].best_book[0].title[0]
        Author: Results[i].best_book[0].author[0].name[0]
        */
      });
    }
  })
})