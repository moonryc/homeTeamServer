import {DataTypes, Model} from "sequelize";
import sequelize from "../config/connection.js";

class Search extends Model {

}

Search.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        search: {
            type: DataTypes.TEXT,
            allowNull: false
        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'search',
    }
)

export default Search