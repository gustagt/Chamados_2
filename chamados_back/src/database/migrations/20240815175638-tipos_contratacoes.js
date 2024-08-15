'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tipos_contratacoes',{
      id_tipo_contratacao:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      tipo_contratacao:{
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique:true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tipos_contratacoes')
  }
};
