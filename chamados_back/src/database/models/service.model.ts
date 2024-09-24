import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";
import Origin from "./origin.model";

class Service extends Model<
  InferAttributes<Service>,
  InferCreationAttributes<Service>
> {
  declare id: CreationOptional<number>;
  declare service: string;

  declare idOrigin: ForeignKey<Origin>;

  declare static associations: {
    origin: Association<Service, Origin>
  };
}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    service: {
      type: new DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    idOrigin: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Origin,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "services",
  }
);

Service.belongsTo(Origin, {
  foreignKey: "idOrigin",
  as: "origin",
});

export default Service;
