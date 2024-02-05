const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const movie = sequelize.define('movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
    },
    image: {
        type: DataTypes.STRING,
    }
});

module.exports = movie;