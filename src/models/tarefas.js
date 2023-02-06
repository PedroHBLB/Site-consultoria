import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelTarefas extends sequelize.Model{}

ModelTarefas.init(
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
            allowNull: true,
        },
        TOOLTIP : {
            type:sequelize.STRING,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"TAREFAS", schema
    }
)

export { ModelTarefas }