import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelLingua extends sequelize.Model{}

ModelLingua.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        LaNGID : {
            type:sequelize.STRING(5),
            allowNull: false,
        },
        ICONE : {
            type:sequelize.STRING(5),
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"LINGUA", freezeTableName: true, schema
    }
)

export { ModelLingua }