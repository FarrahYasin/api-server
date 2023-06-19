'use strict';

const express = require('express');
const cors = require('cors');

const food = require('./models/food.model');
const foodRouter = require('./routes/food');

const clothes = require('./models/clothes.model');
const clothesRouter = require('./routes/clothes');

const pageNotFound = require('./errorHandlers/404')
const serverError = require('./errorHandlers/500')

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
// //   console.log(people)
//   res.status(200).json({
//     message: 'Welcome to home page!'
//   })
// })

app.use(foodRouter);
app.use(clothesRouter);


function start(port) {
  app.listen(port, () => console.log(`Up an running on port: ${port}`));
}
app.use('*' , pageNotFound)
app.use(serverError)


module.exports = {
  start,
  app
}

