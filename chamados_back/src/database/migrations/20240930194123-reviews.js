"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      star:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      suggestion: {
        type: new Sequelize.STRING(300),
        allowNull: true,
      },
      
      id_protocol:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:'protocols',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews')
  },
};
