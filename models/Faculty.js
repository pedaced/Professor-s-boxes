'use strict';
const {Sequelize, DataTypes} = require('sequelize');

module.exports = (seqeulize, DataTypes) => {
    var Faculty = seqeulize.define('Faculty', {
        id: {
            type: Sequelize.DataTypes.INTEGER, 
            primaryKey: true
        },
        facultyName: {
            type: Sequelize.DataTypes.STRING
        }, 
        username: {
            type: Sequelize.DataTypes.STRING
        },
        password: {
            type: Sequelize.DataTypes.STRING
        },
        email: {
            type: Sequelize.DataTypes.STRING
        },
        emailPass: {
            type: Sequelize.DataTypes.STRING
        }
    });
    return Faculty;
}