'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos_sistemas',{
      id_atendimento_sistema:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      sistema_interno:{
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique:true
      },
      atendimentos_id_atendimento:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:true,
        references:{
          model: 'atendimentos',
          key: 'id_atendimento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('atendimentos_sistemas')
  }
};
