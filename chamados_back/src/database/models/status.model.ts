import {

  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";

class Status extends Model<
  InferAttributes<Status>,
  InferCreationAttributes<Status>
> {
  declare id: CreationOptional<number>;
  declare status: string;
}

Status.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    tableName: "status",
    underscored: true,
    timestamps: false,
  }
);

export default Status;
