'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('setores',{
      id_setor:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
      },
      setor:{
        type: new Sequelize.STRING(70),
        allowNull:false,
        unique:true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('setores')
  }
};
