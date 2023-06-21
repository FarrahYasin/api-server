'use strict'


const food = (sequelize, DataTypes) => sequelize.define('Food',{   //after table name we gonna have a constroctor, its a column that we gonna create it inside the database
    //column name :
      foodType:{
          type: DataTypes.STRING,
           allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  } )
  //so this previous step how we can build the schema(the table that we will use)
  
  
  //now the last step in the model, we need to do exports for the food that we will use from the models index
  module.exports =food;
  