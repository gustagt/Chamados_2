'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos',{
      id_atendimento:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
      },
      atendimento:{
        type: new Sequelize.STRING(45),
        allowNull:false,
        unique: true
      },
      origens_id_origem:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'origens',
          key: 'id_origem'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('atendimentos')
  }
};
