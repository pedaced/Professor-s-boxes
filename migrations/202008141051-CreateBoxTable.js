'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Box', {
            id: {
                type: Sequelize.INTEGER,
                defaultValue: null,
                primaryKey: true,
                allowNull : false
            },
            facultyId: {
                type: Sequelize.INTEGER
            },
            facultyName: {
                type: Sequelize.STRING
            },
            professor: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            mobileNo: {
                type: Sequelize.STRING
            },
       
        })
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('Box');
    }
}