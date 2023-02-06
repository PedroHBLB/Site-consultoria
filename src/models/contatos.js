import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelContatos extends sequelize.Model{}

ModelContatos.init(
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
        IDUNI : {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'UNIDADES', key: 'ID'},
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
        },
        IDPAPEL : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'PAPEL', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        CT_NOME : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CT_CARGO : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CT_TEL : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CT_EMAIL : {
            type:sequelize.STRING,
            allowNull: false,
        },
        IDAREA : {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'AREAS', key: 'ID'},
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
        },
        CT_SENHA : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CT_LINGUA : {
            type:sequelize.STRING(5),
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"CONTATOS", schema
    }
)

export { ModelContatos }