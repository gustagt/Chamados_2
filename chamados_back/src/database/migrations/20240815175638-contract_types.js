'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contract_types',{
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      contract_type:{
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique:true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('contract_types')
  }
};
