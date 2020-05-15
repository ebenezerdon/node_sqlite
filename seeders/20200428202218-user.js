'use strict';

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        username: 'johndoe',
        password: 'dontstorepasswordsthisway',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        username: 'janedoe',
        password: 'youreallyshouldhashpasswords',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        username: 'ritadoe',
        password: 'outofpasswordideas',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
