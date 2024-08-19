import { DataTypes, Model } from "sequelize";
import db from ".";
import Setor from "./setor";

class Solicitante extends Model {
  declare idSolicitante: number;
  declare nome: string;
  declare email: string;
  declare usuario: string;
  declare setoresIdSetor: number;
}

Solicitante.init(
  {
    idSolicitante: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    email: {
      type: new DataTypes.STRING(70),
      allowNull: false,
      unique: true,
    },
    usuario: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    setoresIdSetor: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "setores",
        key: "id_setor",
      },
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "solicitantes",
  }
);

Solicitante.belongsTo(Setor,{
    foreignKey: 'setoresIdSetor',
    as: 'setor'
})

export default Solicitante