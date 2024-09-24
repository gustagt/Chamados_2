import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";

class Access extends Model<
  InferAttributes<Access>,
  InferCreationAttributes<Access>
> {
  declare id: CreationOptional<number>;
  declare access: string;

  
}

Access.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    access: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },

  },
  {
    sequelize: db,
    timestamps:false,
    underscored: true,
    tableName: "accesses",
  }
);

export default Access;
