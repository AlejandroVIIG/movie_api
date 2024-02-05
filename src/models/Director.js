const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Director = sequelize.define('director', {
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
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    }
});

module.exports = Director;