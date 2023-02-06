import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelUnidades extends sequelize.Model{}

ModelUnidades.init(
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
        UN_NOME : {
            type:sequelize.STRING,
            allowNull: false,
        },
        UN_END : {
            type:sequelize.STRING,
            allowNull: true,
        },
        UN_NUM : {
            type:sequelize.STRING(20),
            allowNull: true,
        },
        UN_CMPL : {
            type:sequelize.STRING,
            allowNull: true,
        },
        UN_BAIR : {
            type:sequelize.STRING,
            allowNull: true,
        },
        UN_MUNI : {
            type:sequelize.STRING,
            allowNull: true,
        },
        UN_ESTADO : {
            type:sequelize.STRING(2),
            allowNull: true,
        },
        UN_PAIS : {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        UN_CEP : {
            type:sequelize.STRING(10),
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"UNIDADES", schema
    }
)

export { ModelUnidades }