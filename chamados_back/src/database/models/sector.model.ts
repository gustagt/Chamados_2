import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import db from ".";

class Sector extends Model<InferAttributes<Sector>,
InferCreationAttributes<Sector>>{
  declare id: CreationOptional<number>;
  declare sector: string;
}

Sector.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    sector: {
      type: new DataTypes.STRING(70),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    underscored: true, 
    tableName: "sectors",
  }
);

export default Sector;
