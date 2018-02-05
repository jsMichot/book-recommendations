const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database/mongo.js');
const app = express();

app.use(express.static(__dirname + '/../client/'));
app.use(express.static(__dirname + '/../node_modules'));



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
