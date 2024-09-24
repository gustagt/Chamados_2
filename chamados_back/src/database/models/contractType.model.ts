import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";

class ContractType extends Model<
  InferAttributes<ContractType>,
  InferCreationAttributes<ContractType>
> {
  declare id: CreationOptional<number>;
  declare contractType: string;
}

ContractType.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    contractType: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "contract_types",
  }
);

export default ContractType;
