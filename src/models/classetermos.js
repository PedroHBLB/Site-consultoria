import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelClassetermos extends sequelize.Model{}

ModelClassetermos.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        CLASSE : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"CLASSETERMOS", schema
    }
)

export { ModelClassetermos }