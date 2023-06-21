'use strict'

const book = (sequelize, DataTypes) => sequelize.define('Book1', {
    name: {
        type: DataTypes.STRING
    },
    authorId:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = book;