"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("solicitantes", {
      id_solicitante: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      email: {
        type: new Sequelize.STRING(70),
        allowNull: false,
        unique: true,
      },
      usuario: {
        type: new Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      setores_id_setor: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "setores",
          key: "id_setor",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('solicitantes')
  },
};
