import { DataTypes, Model } from "sequelize";
import db from '.'

class Status extends Model {
    declare idStatus: number;
    declare status: string;
}

Status.init({
    idStatus: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: new DataTypes.STRING(45),
        allowNull: false,
        unique: true,
      },
},{
    sequelize: db,
    tableName: 'status',
    underscored: true,
    timestamps:false
})

export default Status