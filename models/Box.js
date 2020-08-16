'use strict';
const {Sequelize, DataTypes} = require('sequelize');

module.exports = (seqeulize, DataTypes) => {
    var Box = seqeulize.define('Box', {
        id: {
            type: Sequelize.DataTypes.INTEGER, 
            defaultValue: null,
            primaryKey: true,
            allowNull : false
        },
        facultyId: {
            type: Sequelize.DataTypes.INTEGER
        }, 
        facultyName: {
            type: Sequelize.DataTypes.STRING
        }, 
        professor: {
            type: Sequelize.DataTypes.STRING
        },
        email: {
            type: Sequelize.DataTypes.STRING
        },
        mobileNo: {
            type: Sequelize.DataTypes.STRING
        }
    });
    return Box;
}