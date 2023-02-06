import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelRespindentrevista extends sequelize.Model{}

ModelRespindentrevista.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDPADRAOENTREVISTA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'PADRAOENTREVISTA', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        INDICADOR:{
            type:sequelize.STRING(100),
            allowNull: false,
        },
        IDTIPOENTRADA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'TIPOSENTRADAS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        OBJETIVO : {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        META : {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        REAL : {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        OBJ : {
            type:sequelize.STRING(20),
            allowNull: true,
        },
        BARREIRA : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        EFEITOBARREIRA : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        SEVERIDADE: {
            type:sequelize.INTEGER,
            allowNull: true,
        },
        EFEITOBARREIRA : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        SEVERIDADE: {
            type:sequelize.INTEGER,
            allowNull: true,
        },
        CAUSA : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        OCORRENCIA: {
            type:sequelize.INTEGER,
            allowNull: true,
        },
        CONTROLES: {
            type:sequelize.TEXT,
            allowNull: true,
        },
        DETECCAO: {
            type:sequelize.INTEGER,
            allowNull: true,
        },
        NUMINDICADOR: {
            type:sequelize.BIGINT,
            allowNull: false
        },
        GRUPO:{
            type:sequelize.INTEGER,
            allowNull: true
        },
        IDRESPENTREVISTA:{
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'RESPENTREVISTA', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        VALOR:{
            type:sequelize.BIGINT,
            allowNull: false
        },
        YEAR: {
            type:sequelize.BIGINT,
            allowNull: true,
        }
    },
    {
        sequelize : connection, modelName:"RESPINDENTREVISTA", freezeTableName: true, schema
    }
)

export { ModelRespindentrevista }