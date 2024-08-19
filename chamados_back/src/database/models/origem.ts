import { DataTypes, Model } from "sequelize";
import db from '.'

class Origem extends Model {
    declare idOrigem : number;
    declare origem : string;
}

Origem.init({
    idOrigem:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      origem:{
        type: new DataTypes.STRING(45),
        allowNull:false,
        unique:true
      }
},{
    sequelize: db,
    underscored: true,
    timestamps: false,
    tableName: 'origens'
})

export default Origem