import { DataTypes, Model } from "sequelize";
import db from ".";

class Acesso extends Model {
  declare idAcesso: number;
  declare acesso: string;
}

Acesso.init(
  {
    idAcesso: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    acesso: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    underscored: true,
    tableName: "acessos",
  }
);

export default Acesso