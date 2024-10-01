import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import db from ".";
import Protocol from "./protocol.model";

class Review extends Model<
  InferAttributes<Review>,
  InferCreationAttributes<Review>
> {
  declare id: CreationOptional<number>;
  declare star: number;
  declare suggestion: CreationOptional<string>;

  declare idProtocol: ForeignKey<Protocol["id"]>;

  declare protocol: NonAttribute<Protocol>;

  declare associations?: {
    protocol: Association<Review, Protocol>;
  };
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    suggestion: {
      type: new DataTypes.STRING(300),
      allowNull: true,
    },
    idProtocol: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Protocol,
        key: "id",
      },
      unique: true,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "reviews",
  }
);

Protocol.hasOne(Review, {
  foreignKey: "idProtocol",
  as: "protocol",
});
Review.belongsTo(Protocol, { foreignKey: "idProtocol" });

export default Review;
