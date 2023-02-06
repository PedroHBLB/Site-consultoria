import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelVersions extends sequelize.Model{}

ModelVersions.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        HISTORICO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        DATA : {
            type:sequelize.DATEONLY,
            allowNull: true,
        },
        ATIVA : {
            type:sequelize.BOOLEAN,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"VERSIONS", schema
    }
)

export { ModelVersions }