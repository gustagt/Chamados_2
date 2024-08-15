'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_has_acessos', {
      users_id_user:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'users',
          key: 'id_user'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      acessos_id_acesso:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'acessos',
          key: 'id_acesso'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_has_acessos')
  }
};
