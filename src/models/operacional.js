import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelOperacional extends sequelize.Model{}

ModelOperacional.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        DESCRICAO : {
            type:sequelize.STRING(25),
            allowNull: false,
        },
        DETALHE : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        ICONE : {
            type:sequelize.STRING(2),
            allowNull: true,
        },
        TOOLTIP : {
            type:sequelize.STRING,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"OPERACIONAL", freezeTableName:true, schema
    }
)

export { ModelOperacional }