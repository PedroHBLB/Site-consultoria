    import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelDocumentos extends sequelize.Model{}

ModelDocumentos.init(
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
        FILENAME : {
            type:sequelize.STRING,
            allowNull: false,
        },
        FILESOURCE : {
            type:sequelize.STRING,
            allowNull: false,
        },
        FILETYPE : {
            type:sequelize.BIGINT,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"DOCUMENTOS", schema
    }
)

export { ModelDocumentos }