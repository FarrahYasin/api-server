'use strict'

//creating a table model for the foodType and giving it two coulmns foodtype and price
const food = (sequelize, DataTypes) => sequelize.define('Food',{   
      foodType:{
          type: DataTypes.STRING,
           allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  } );
  //now the last step in the model, we need to do exports for the food that we will use from the models index
  module.exports =food;
  