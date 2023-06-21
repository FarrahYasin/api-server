'use strict'

const author = (sequelize, DataTypes) => sequelize.define('Author', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = author;
///export autor