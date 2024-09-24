import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  HasOneCreateAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import db from ".";
import User from "./user.model";
import Status from "./status.model";
import Origin from "./origin.model";
import Sector from "./sector.model";
import Service from "./service.model";
import System from "./system.model";

class Protocol extends Model<
  InferAttributes<Protocol>,
  InferCreationAttributes<Protocol>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare applicant: string;
  declare details: CreationOptional<string>;
  declare email: CreationOptional<string>;
  declare observation: CreationOptional<string>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare idOrigin: ForeignKey<Origin["id"]>;
  declare idSector: ForeignKey<Sector["id"]>;
  declare idStatus: ForeignKey<Status["id"]>;
  declare idService: ForeignKey<Service["id"]>;
  declare idUser: ForeignKey<User["id"]>;
  declare idSystem: ForeignKey<System["id"]>;

  declare createUser: HasOneCreateAssociationMixin<User>;

  declare user?: NonAttribute<User>;

  declare static associations: {
    user: Association<Protocol, User>;
  };
}

Protocol.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    applicant: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    details: {
      type: new DataTypes.STRING(500),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(100),
      allowNull: true,
    },
    observation: {
      type: new DataTypes.STRING(500),
      allowNull: true,
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
    idSector: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Sector,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    idStatus: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Status,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    idService: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Service,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    idUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    idSystem: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: System,
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
    underscored: true,
    tableName: "protocols",
  }
);
Protocol.belongsTo(Origin, {
  foreignKey: "idOrigin",
  as: "origin",
});
Protocol.belongsTo(Sector, {
  foreignKey: "idSector",
  as: "sector",
});
Protocol.belongsTo(Status, {
  foreignKey: "idStatus",
  as: "status",
});
Protocol.belongsTo(Service, {
  foreignKey: "idService",
  as: "service",
});

User.hasOne(Protocol, {
  foreignKey: "idUser",
});
Protocol.belongsTo(User, {
  foreignKey: "idUser",
  as: "user",
});

Protocol.belongsTo(System, {
  foreignKey: "idSystem",
  as: "system",
});

export default Protocol;
