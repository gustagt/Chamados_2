'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('chamados',{
      id_chamado:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true,
      },
      data_criacao:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      nome_solicitante:{
        type: new Sequelize.STRING(45),
        allowNull:false
      },
      usuario:{
        type: new Sequelize.STRING(45),
        allowNull:false
      },
      observacao:{
        type: new Sequelize.STRING(500),
        allowNull:true
      },
      email:{
        type: new Sequelize.STRING(100),
        allowNull:true
      },
      observacao_interna:{
        type: new Sequelize.STRING(500),
        allowNull:true
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
      },
      setores_id_setor:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'setores',
          key: 'id_setor'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status_id_status:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'status',
          key: 'id_status'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      atendimentos_id_atendimento:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'atendimentos',
          key: 'id_atendimento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      users_id_users:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:true,
        references:{
          model: 'users',
          key: 'id_user'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      chamados_sistemas_internos_id_chamado_sistema_interno:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:true,
        references:{
          model: 'chamados_sistemas_internos',
          key: 'id_chamado_sistema_interno'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('chamados')
  }
};
