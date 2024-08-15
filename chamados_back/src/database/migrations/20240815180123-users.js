"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id_user: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: new Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: new Sequelize.STRING(255),
        allowNull: false,
      },
      funcao: {
        type: new Sequelize.STRING(45),
        allowNull: false,
      },
      superior: {
        type: new Sequelize.STRING(45),
        allowNull: false,
      },
      email: {
        type: new Sequelize.STRING(70),
        allowNull: true,
        unique: true,
      },
      usuario: {
        type: new Sequelize.STRING(45),
        allowNull: true,
        unique: true,
      },
      tipos_contratacoes_id_tipo_contratacao: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "tipos_contratacoes",
          key: "id_tipo_contratacao",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
