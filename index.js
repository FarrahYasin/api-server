'use strict'

require('dotenv').config();//require the dotenv
const { db } = require('./src/models');
const { start } = require('./src/server'); // im destructuring the exported object to get the start function(the start property) from it 

const PORT=process.env.PORT || 5003;
// console.log(process.env.NODE_ENV)
// start(PORT)
// //this how can i do connect to the database and running the server at the same time because we write start(PORT)

db.sync().then(() => {//db--> db that we exported from the index model (for the sequlize)
    start(PORT)
}).catch(err=> console.log(err));



