'use strict'

//create a schema and table for clothes
const clothes = (sequelize, DataTypes) => sequelize.define('Clothes',{   //after table name we gonna have a constroctor, its a column that we gonna create it inside the database
    //column name :
      clothesType:{
          type: DataTypes.STRING,
           allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  } )
  //so this previous step how we can build the schema(the table that we will use)
  
  
  //now the last step in the model, we need to do exports for the clothes that we will use from the models index
  module.exports =clothes;
  