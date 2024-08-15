'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('origens', {
      id_origem:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      origem:{
        type: new Sequelize.STRING(45),
        allowNull:false,
        unique:true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('origens')
  }
};
