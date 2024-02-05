const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const director = sequelize.define('director', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type:DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDay: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    }
});

module.exports = director;