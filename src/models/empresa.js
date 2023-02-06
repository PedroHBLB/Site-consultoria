import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelEmpresa extends sequelize.Model{}

ModelEmpresa.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        FLGATIVA : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        EM_NOME : {
            type:sequelize.STRING,
            allowNull: false,
        },
        EM_IDSETOR : {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'SETOR', key: 'ID'},
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
        },
        EM_IDROB : {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'PORTEEMPRESA', key: 'ID'},
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
        },
        EM_IDCONS : {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'CONSULTORIA', key: 'ID'},
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
        },
        EM_CNPJ : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        EM_TELEMP : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        EM_WEBPAGE : {
            type:sequelize.STRING,
            allowNull: false,
        },
        PF_NOME : {
            type:sequelize.STRING,
            allowNull: false,
        },
        PF_CARGO : {
            type:sequelize.STRING,
            allowNull: false,
        },
        PF_TEL : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        PF_EMAIL : {
            type:sequelize.STRING,
            allowNull: false,
        },
        PF_APELIDO : {
            type:sequelize.STRING(100),
            allowNull: true,
        },
        POSICAO: {
            type:sequelize.BIGINT,
            allowNull: false,
        }
    },
    {
        sequelize : connection, modelName:"EMPRESA", freezeTableName: true, schema
    }
)

export { ModelEmpresa }