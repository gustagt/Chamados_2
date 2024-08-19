import { DataTypes, Model } from "sequelize";
import db from ".";

class Setor extends Model {
  declare idSetor: number;
  declare setor: string;
}

Setor.init(
  {
    idSetor: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    setor: {
      type: new DataTypes.STRING(70),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    underscored: true,
    tableName: "setores",
  }
);

export default Setor;
