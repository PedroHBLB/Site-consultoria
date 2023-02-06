import sequelize from "sequelize"

import { connection } from "../config/connection.js";

const schema = ""

class ModelEstadoatual extends sequelize.Model{}

ModelEstadoatual.init(
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
        sequelize : connection, modelName:"ESTADOATUAL", freezeTableName: true ,schema
    }
)

export { ModelEstadoatual }