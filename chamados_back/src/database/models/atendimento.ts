
import { DataTypes, Model } from 'sequelize';
import db from '.';
import Origem from './origem';

class Atendimento extends Model {
    declare idAtendimento : number;
    declare atendimento : string;
    declare origensIdOrigem : number;
}

Atendimento.init({
    idAtendimento:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
      },
      atendimento:{
        type: new DataTypes.STRING(45),
        allowNull:false,
        unique: true
      },
      origensIdOrigem:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        references:{
          model: 'origens',
          key: 'id_origem'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
},{
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: 'atendimentos'
})

Atendimento.belongsTo(Origem,{
    foreignKey: 'origensIdOrigem',
    as: 'Origem'
})

export default Atendimento