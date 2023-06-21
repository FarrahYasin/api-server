'use strict';

const express = require('express');
const cors = require('cors');

const food = require('./models/food.model');
const foodRouter = require('./routes/food');

const clothes = require('./models/clothes.model');
const clothesRouter = require('./routes/clothes');

const book = require('./models/book.model');
const bookRouter = require('./routes/book');

const author = require('./models/author.model');
const authorRouter = require('./routes/author');

const pageNotFound = require('./errorHandlers/404')
const serverError = require('./errorHandlers/500')


const app = express();
app.use(cors());
app.use(express.json());

app.use(foodRouter);
app.use(clothesRouter);
app.use(bookRouter);
app.use(authorRouter);


function start(port) {
  app.listen(port, () => console.log(`Up an running on port: ${port}`));
}
app.use('*' , pageNotFound)
app.use(serverError)


module.exports = {
  start,
  app
}

