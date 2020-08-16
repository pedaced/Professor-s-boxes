'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Box', [{
        boxId: 1,
        facultyId: 1
      },
      {
        boxId: 2,
        facultyId: 1
      },
      {
        boxId: 3,
        facultyId: 1
      },
      {
        boxId: 4,
        facultyId: 1
      },
      {
        boxId: 5,
        facultyId: 1
      },
      {
        boxId: 6,
        facultyId: 1
      },
      {
        boxId: 7,
        facultyId: 1
      },
      {
        boxId: 8,
        facultyId: 1
      },
      {
        boxId: 9,
        facultyId: 1
      },
      {
        boxId: 1,
        facultyId: 2
      },
      {
        boxId: 2,
        facultyId: 2
      },
      {
        boxId: 3,
        facultyId: 2
      },
      {
        boxId: 4,
        facultyId: 2
      },
      {
        boxId: 5,
        facultyId: 2
      },
      {
        boxId: 6,
        facultyId: 2
      },
      {
        boxId: 7,
        facultyId: 2
      },
      {
        boxId: 8,
        facultyId: 2
      },
      {
        boxId: 9,
        facultyId: 2
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Box', null, {})
  }
};
