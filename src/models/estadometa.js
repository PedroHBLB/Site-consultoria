import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelEstadometa extends sequelize.Model{}

ModelEstadometa.init(
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
        sequelize : connection, modelName:"ESTADOMETA", freezeTableName: true ,schema
    }
)

export { ModelEstadometa }