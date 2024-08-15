'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('acessos',{
      id_acesso:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      acesso:{
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique:true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('acessos')
  }
};
