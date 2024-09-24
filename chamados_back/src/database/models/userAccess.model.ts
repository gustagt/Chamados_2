import {
  Association,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";
import User from "./user.model"
import Access from "./access.model";

class UserAccess extends Model<
  InferAttributes<UserAccess>,
  InferCreationAttributes<UserAccess>
> {

  declare idUser: ForeignKey<User["id"]>;
  declare idAccess: ForeignKey<Access["id"]>;

  declare static associations: {
    accesses: Association<User, Access>;
    users: Association<Access, User>;
  };
}

UserAccess.init(
  {
    idUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    idAccess: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Access,
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
    tableName: "users_accesses",
  }
);

User.belongsToMany(Access, {
  foreignKey: "idUser",
  otherKey: "idAccess",
  as: "accesses",
  through: UserAccess,
});

Access.belongsToMany(User, {
  foreignKey: "idAccess",
  otherKey: "idUser",
  as: "users",
  through: UserAccess,
});

export default UserAccess;
