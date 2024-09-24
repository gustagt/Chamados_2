'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('systems',{
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      system:{
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique:true
      },
  
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('systems')
  }
};
