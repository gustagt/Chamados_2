import { DataTypes, Model } from "sequelize";
import db from ".";
import TipoContratacao from "./tipoContratacao";

class User extends Model {
  declare idUser: number;
}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: new DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    funcao: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    superior: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(70),
      allowNull: true,
      unique: true,
    },
    usuario: {
      type: new DataTypes.STRING(45),
      allowNull: true,
      unique: true,
    },
    tipos_contratacoes_id_tipo_contratacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "tipos_contratacoes",
        key: "id_tipo_contratacao",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: db,
    timestamps: false,
    underscored: true,
    tableName: "users",
  }
);

User.belongsTo(TipoContratacao,{
    foreignKey: 'tipos_contratacoes_id_tipo_contratacao',
    as: 'TipoContratacao'
})

export default User;
