import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelTiposentradas extends sequelize.Model{}

ModelTiposentradas.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        FLGINOUT : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        TIPOS : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        USACOMBOSOURCE : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        LIMITE : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        TOOLTIP : {
            type:sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"TIPOSENTRADAS", schema
    }
)

export { ModelTiposentradas }