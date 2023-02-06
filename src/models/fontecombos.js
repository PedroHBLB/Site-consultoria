import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelFontecombos extends sequelize.Model{}

ModelFontecombos.init(
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
        sequelize : connection, modelName:"FONTECOMBOS", schema
    }
)

export { ModelFontecombos }