import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelAtividades extends sequelize.Model{}

ModelAtividades.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
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
        INDIVIDGRUPO : {
            type:sequelize.BIGINT,
            allowNull: false,
        },
        DESCRICAO : {
            type:sequelize.STRING(100),
            allowNull: false,
        },
        INCLUIREGISTRO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        SEQUENCIA : {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        TOOLTIP : {
            type:sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"ATIVIDADES", schema
    }
)

export { ModelAtividades }