import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelIndicadores extends sequelize.Model{}

ModelIndicadores.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        DESCRICAO : {
            type:sequelize.STRING(100),
            allowNull: false,
        },
        DETALHE : {
            type:sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"INDICADORES",  schema
    }
)

export { ModelIndicadores }