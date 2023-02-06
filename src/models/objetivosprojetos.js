import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelObjProjetos extends sequelize.Model{}

ModelObjProjetos.init(
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
        sequelize : connection, modelName:"OBJETIVOSPROJETOS", schema
    }
)

export { ModelObjProjetos }