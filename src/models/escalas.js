import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelEscalas extends sequelize.Model{}

ModelEscalas.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        DESCRICAO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"ESCALAS", schema
    }
)

export { ModelEscalas }