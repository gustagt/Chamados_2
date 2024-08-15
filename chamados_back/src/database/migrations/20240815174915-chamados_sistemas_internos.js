'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('chamados_sistemas_internos', {
      id_chamado_sistema_interno:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      atendimentos_sistemas_id_atendimento_sistema:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'atendimentos_sistemas',
          key: 'id_atendimento_sistema'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('chamados_sistemas_internos')
  }
};
