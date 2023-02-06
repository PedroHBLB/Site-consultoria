import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelSetor extends sequelize.Model{}

ModelSetor.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        DESCRICAO : {
            type:sequelize.STRING,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"SETOR", freezeTableName: true, schema
    }
)

export { ModelSetor }