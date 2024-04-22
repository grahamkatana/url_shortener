'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  

    await queryInterface.bulkInsert('shortened_urls', [{
      "full_url": "https://www.projectbook.co.za",
      "shortened_url": "Zj84uDnzv1V",
      "visits": 0,
      "created_at": "2024-04-10 22:10:40",
      "updated_at": "2024-04-10 22:10:40",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
