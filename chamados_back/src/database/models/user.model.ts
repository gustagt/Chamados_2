import {
  Association,
  BelongsToManyAddAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import db from ".";
import Access from "./access.model";
import ContractType from "./contractType.model";


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare function: string;


  declare addAccesses: BelongsToManyAddAssociationsMixin<Access, number>;
  declare setAccesses: BelongsToManySetAssociationsMixin<Access, number>;


  
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  
  declare idContractType: ForeignKey<ContractType["id"]>;

  declare static associations: {
    contractType: Association<User, ContractType>
  };

  declare accesses?: NonAttribute<Access[]>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    function: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    idContractType: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: ContractType, //pode dar problema
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    timestamps:true,
    underscored: true,
    tableName: "users",
  }
);

User.belongsTo(ContractType, {
  foreignKey: "idContractType",
  as: "contractType",
});

export default User;
