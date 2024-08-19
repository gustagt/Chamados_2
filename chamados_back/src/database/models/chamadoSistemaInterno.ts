import { DataTypes, Model } from 'sequelize';
import db from '.'
import AtendimentoSistema from './atendimentoSistema';

class ChamadoSistemaInterno extends Model {
    declare idChamadoSistemaInterno : number;
    declare atendimentosSistemasIdAtendimentoSistema : number;
}

ChamadoSistemaInterno.init({
    idChamadoSistemaInterno:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      atendimentosSistemasIdAtendimentoSistema:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'atendimentos_sistemas',
          key: 'id_atendimento_sistema'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
},{
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: 'chamados_sistemas_internos'
})

ChamadoSistemaInterno.belongsTo(AtendimentoSistema,{
    foreignKey: 'atendimentosSistemasIdAtendimentoSistema',
    as: 'atendimentoSistema'
})

export default ChamadoSistemaInterno