import {
 
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";

class System extends Model<
  InferAttributes<System>,
  InferCreationAttributes<System>
> {
  declare id: CreationOptional<number>;
  declare system: string;
}

System.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    system: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "systems",
  }
);

export default System;
