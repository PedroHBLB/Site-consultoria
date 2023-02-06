import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelDescricao extends sequelize.Model{}

ModelDescricao.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        TEXTO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"DESCRICAO", freezeTableName: true ,schema
    }
)

export { ModelDescricao }