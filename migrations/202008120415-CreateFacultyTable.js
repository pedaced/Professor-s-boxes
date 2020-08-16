'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Faculty', {
            id: {
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            facultyName: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            emailPass: {
                type: Sequelize.STRING
            },
       
        })
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('Faculty');
    }
}