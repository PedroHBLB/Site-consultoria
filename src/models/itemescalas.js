import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelItemescalas extends sequelize.Model{}

ModelItemescalas.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDESCALA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'ESCALAS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        VALOR : {
            type:sequelize.BIGINT,
            allowNull: false,
        },
        DESCRICAO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"ITEMESCALAS", schema
    }
)

export { ModelItemescalas }