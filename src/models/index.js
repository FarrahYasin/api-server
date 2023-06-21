
'use strict'
const { Sequelize, DataTypes } = require("sequelize");

//checking if the enviroment is testing ,if testing use sqlite otherwise use postgress
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;
//checking the envirmonet if its productrion use the options with ssl if not use an empty options
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {//in the production we will take these options
    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized:false
        }
    }
} : {};
//else if process.env.NODE_ENV === 'test', we will not have any options

//now also then we need to spacifi the sequelize new instance that is taking the url and the option so we can use it in the connection of the database
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions); //new instanse from Sequelize//Sequelize should be require from Sequelize above in first

//importing the food and the clothes functions to start the schemas
const food= require('./food.model');
const clothes= require('./clothes.model');

module.exports ={
    db: sequelize, //the database that I will do connect to it and its the sequilize(because its taken the option and taken the link(DATABASE_URL))
    Food: food(sequelize, DataTypes) //I will pass the Food  that we have, will be taken from the food, and this food its taken two things the sequelize and DataType, so we should pass to it these two things
,
    Clothes: clothes(sequelize, DataTypes) //I will pass the clothes that we have, will be taken from the clothes, and this clothes its taken two things the sequelize and DataType, so we should pass to it these two things      
}
