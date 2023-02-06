import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelAreas extends sequelize.Model{}

ModelAreas.init(
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
        TOOLTIP : {
            type:sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"AREAS", schema
    }
)

export { ModelAreas }