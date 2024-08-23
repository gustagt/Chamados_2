import { DataTypes, Model } from "sequelize";
import db from ".";
import Origem from "./origem";
import Setor from "./setor";
import Status from "./status";
import Atendimento from "./atendimento";
import User from "./user";
import ChamadoSistemaInterno from "./chamadoSistemaInterno";
import IChamado from "../../interfaces/chamado";

class Chamado extends Model implements IChamado{
  declare idChamado?: number;
  declare dataCriacao: string;
  declare nomeSolicitante: string;
  declare usuario: string;
  declare observacao?: string;
  declare email?: string;
  declare observacaoInterna?: string;
  declare origensIdOrigem: number;
  declare setoresIdSetor: number;
  declare statusIdStatus: number;
  declare atendimentosIdAtendimento: number;
  declare usersIdUsers?: number;
  declare chamadosSistemasInternosIdChamadoSistemaInterno?: number;
}

Chamado.init(
  {
    idChamado: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    dataCriacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nomeSolicitante: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    usuario: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    observacao: {
      type: new DataTypes.STRING(500),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(100),
      allowNull: true,
    },
    observacaoInterna: {
      type: new DataTypes.STRING(500),
      allowNull: true,
    },
    origensIdOrigem: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "origens",
        key: "id_origem",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    setoresIdSetor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "setores",
        key: "id_setor",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    statusIdStatus: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "status",
        key: "id_status",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    atendimentosIdAtendimento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "atendimentos",
        key: "id_atendimento",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    usersIdUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "users",
        key: "id_user",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    chamadosSistemasInternosIdChamadoSistemaInterno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "chamados_sistemas_internos",
        key: "id_chamado_sistema_interno",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: "chamados",
  }
);
Chamado.belongsTo(Origem, {
  foreignKey: "origensIdOrigem",
  as: "Origem",
});
Chamado.belongsTo(Setor, {
  foreignKey: "setoresIdSetor",
  as: "setor",
});
Chamado.belongsTo(Status, {
  foreignKey: "statusIdStatus",
  as: "status",
});
Chamado.belongsTo(Atendimento, {
  foreignKey: "atendimentosIdAtendimento",
  as: "atendimento",
});
Chamado.belongsTo(User, {
  foreignKey: "usersIdUser",
  as: "user",
});
Chamado.belongsTo(ChamadoSistemaInterno, {
  foreignKey: "chamadosSistemasInternosIdChamadoSistemaInterno",
  as: "chamadoSistemaInterno",
});
export default Chamado;
