

import { DataTypes, Model } from 'sequelize';
import db from '.'

class TipoContratacao extends Model {
    declare idTipoContratacao : number;
    declare tipoContratacao : string
}

TipoContratacao.init({
    idTipoContratacao:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      tipoContratacao:{
        type: new DataTypes.STRING(45),
        allowNull: false,
        unique:true
      }
},{
    sequelize:db,
    underscored:true,
    timestamps:false,
    tableName: 'tipos_contratacoes'
})

export default TipoContratacao