import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelGrupo extends sequelize.Model{}

ModelGrupo.init(
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
        sequelize : connection, modelName:"GRUPO", freezeTableName: true, schema
    }
)

export { ModelGrupo }