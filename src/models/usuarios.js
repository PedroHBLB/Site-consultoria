import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelUsuarios extends sequelize.Model{}

ModelUsuarios.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDPAPEL : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'PAPEL', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        NOME : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        USUA_TEL : {
            type:sequelize.STRING,
            allowNull: false,
        },
        USUA_EMAIL : {
            type:sequelize.STRING,
            allowNull: false,
        },
        USUA_SENHA : {
            type:sequelize.STRING(20),
            allowNull: false,
        },
        USUA_LINGUA : {
            type:sequelize.STRING(5),
            allowNull: false,
        },
        FLGATIVO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize : connection, modelName:"USUARIOS", schema
    }
)

export { ModelUsuarios }