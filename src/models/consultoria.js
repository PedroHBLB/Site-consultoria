import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelConsultoria extends sequelize.Model{}

ModelConsultoria.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        CONSULTORIA : {
            type:sequelize.STRING(100),
            allowNull: false,
        },
        CS_IDROB : {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'PORTEEMPRESA', key: 'ID'},
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
        },
        CS_CNPJ : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CS_TELCONS : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CS_WEBPAGE : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CS_NOME : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CS_CARGO : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CS_TELRESP : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CS_EMAIL : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CS_END : {
            type:sequelize.STRING,
            allowNull: true,
        },
        CS_NUM : {
            type:sequelize.STRING(20),
            allowNull: true,
        },
        CS_CMPL : {
            type:sequelize.STRING,
            allowNull: true,
        },
        CS_BAIR : {
            type:sequelize.STRING,
            allowNull: true,
        },
        CS_MUNI : {
            type:sequelize.STRING,
            allowNull: true,
        },
        CS_ESTADO : {
            type:sequelize.STRING(2),
            allowNull: true,
        },
        CS_PAIS : {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        CS_CEP : {
            type:sequelize.STRING(10),
            allowNull: true,
        },
        ARQUIVOCONS : {
            type:sequelize.STRING,
            allowNull: true,
        },
        FLGVIDEO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        FLGATIVA : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        CS_APELIDO : {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        
    },
    {
        sequelize : connection, modelName:"CONSULTORIA", freezeTableName: true, schema
    }
)

export { ModelConsultoria }