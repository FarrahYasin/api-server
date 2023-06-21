'use strict';

const express = require('express');
const cors = require('cors');

const food = require('./models/food.model');//food model
const foodRouter = require('./routes/food');//food router

const clothes = require('./models/clothes.model');//clothes model
const clothesRouter = require('./routes/clothes');//clothes router

const pageNotFound = require('./errorHandlers/404')
const serverError = require('./errorHandlers/500')
const app = express();
app.use(cors());//using cors to verify requests 
app.use(express.json());//parsing the body 

app.use(foodRouter);//using the foodRouter as a middleware 
app.use(clothesRouter);//using the clothes router as middleware 


function start(port) {//function to start the server 
  app.listen(port, () => console.log(`Up an running on port: ${port}`));
}
app.use('*' , pageNotFound)//middleware to handle not found pages
app.use(serverError)//middleware to handle servererrors


module.exports = {//exporting the staart funciton and the app 
  start,
  app
}

