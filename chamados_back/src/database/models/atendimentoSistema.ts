
import { DataTypes, Model } from 'sequelize';
import db from '.'
import Atendimento from './atendimento';

class AtendimentoSistema extends Model {
    declare idAtendimentoSistema : number;
    declare sistemaInterno : string;
    declare atendimentosIdAtendimento : number;
}

AtendimentoSistema.init({
    idAtendimentoSistema:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      sistemaInterno:{
        type: new DataTypes.STRING(45),
        allowNull: false,
        unique:true
      },
      atendimentosIdAtendimento:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:true,
        references:{
          model: 'atendimentos',
          key: 'id_atendimento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
},{
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: 'atendimentos_sistemas'
})

AtendimentoSistema.belongsTo(Atendimento,{
    foreignKey: 'atendimentosIdAtendimento',
    as: 'atendimento'
})

export default AtendimentoSistema