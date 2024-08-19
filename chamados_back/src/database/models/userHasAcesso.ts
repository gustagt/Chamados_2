import { DataTypes, Model } from "sequelize";
import db from ".";
import User from "./user";
import Acesso from "./acesso";

class UserHasAcesso extends Model {
  declare usersIdUser: number;
  declare acessosIdAcesso: number;
}

UserHasAcesso.init(
  {
    usersIdUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "users",
        key: "id_user",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    acessosIdAcesso: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "acessos",
        key: "id_acesso",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "users_has_acessos",
  }
);

User.belongsToMany(Acesso,{
    foreignKey:'usersIdUser',
    otherKey:'acessosIdAcesso',
    as: 'user_acessos',
    through: UserHasAcesso
})
Acesso.belongsToMany(User,{
    foreignKey:'acessosIdAcesso',
    otherKey:'usersIdUser',
    as: 'acesso_users',
    through: UserHasAcesso
})

export default UserHasAcesso