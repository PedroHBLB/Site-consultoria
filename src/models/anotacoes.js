import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelAnotacoes extends sequelize.Model{}

ModelAnotacoes.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDEMP : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'EMPRESA', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        IDOPER : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'OPERACIONAL', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        IDTAREFA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'TAREFAS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        TITULO : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        TEXTO : {
            type:sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"ANOTACOES", schema
    }
)

export { ModelAnotacoes }