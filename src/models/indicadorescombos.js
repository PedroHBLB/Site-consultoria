import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelIndicadorescombo extends sequelize.Model{}

ModelIndicadorescombo.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        TEXTO : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        FONTE : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"INDICADORESCOMBOS", schema
    }
)

export { ModelIndicadorescombo }