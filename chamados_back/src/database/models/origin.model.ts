import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";

class Origin extends Model<
  InferAttributes<Origin>,
  InferCreationAttributes<Origin>
> {
  declare id: CreationOptional<number>;
  declare origin: string;
}

Origin.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    origin: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "origins",
  }
);

export default Origin;
