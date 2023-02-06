import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelPorteempresa extends sequelize.Model{}

ModelPorteempresa.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        CLASSIFICACAO : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        ROB : {
            type:sequelize.STRING,
            allowNull: false,
        },
        FONTE : {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        DTPESQ : {
            type:sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"PORTEEMPRESA", freezeTableName: true, schema
    }
)

export { ModelPorteempresa }