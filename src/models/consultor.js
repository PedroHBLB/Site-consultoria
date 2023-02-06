import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelConsultor extends sequelize.Model{}

ModelConsultor.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDCONS : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'CONSULTORIA', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        IDPAPEL : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'PAPEL', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        CONSULTOR : {
            type:sequelize.STRING,
            allowNull: false,
        },
        CSTR_ESPEC : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        CSTR_TEL : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CSTR_EMAIL : {
            type:sequelize.STRING,
            allowNull: false,
        },
        FLGATIVO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        CSTR_SENHA : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        CSTR_LINGUA : {
            type:sequelize.STRING(5),
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"CONSULTOR", freezeTableName: true, schema
    }
)

export { ModelConsultor }