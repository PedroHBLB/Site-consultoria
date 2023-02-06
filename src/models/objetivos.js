import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelObjetivos extends sequelize.Model{}

ModelObjetivos.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        DESCRICAO : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        DETALHE : {
            type:sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"OBJETIVOS", schema
    }
)

export { ModelObjetivos }