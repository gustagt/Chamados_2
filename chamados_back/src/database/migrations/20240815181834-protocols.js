'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('protocols',{
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true,
      },
      name:{
        type: new Sequelize.STRING(45),
        allowNull:false
      },
      applicant:{
        type: new Sequelize.STRING(45),
        allowNull:false
      },
      details:{
        type: new Sequelize.STRING(500),
        allowNull:true
      },
      email:{
        type: new Sequelize.STRING(100),
        allowNull:true
      },
      observation:{
        type: new Sequelize.STRING(500),
        allowNull:true
      },
      id_origin:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'origins',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_sector:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'sectors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_status:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'status',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_service:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'services',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_user:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:true,
        references:{
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_system:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:true,
        references:{
          model: 'systems',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('protocols')
  }
};
