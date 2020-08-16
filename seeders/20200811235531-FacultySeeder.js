'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Faculty', [{
        id: 1,
        facultyName: 'دانشکده مهندسی کامپیوتر',
        username: 'ce123',
        password: '123',
        email: 'pdahmadiyeh@aut.ac.ir',
        emailPass: 'Acedpedped1375ok'
      },
      {
        id: 2,
        facultyName: 'دانشکده مهندسی برق',
        username: 'ee123',
        password: '123',
        email: 'pdahmadiyeh@aut.ac.ir',
        emailPass: 'Acedpedped1375ok'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Faculty', [{
        password: '123'
      }], {});
  }
};
