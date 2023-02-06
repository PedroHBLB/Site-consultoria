import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelRespentrevista extends sequelize.Model{}

ModelRespentrevista.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDSCH : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'REGENTREVISTA', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        IDVERSAO : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'VERSIONS', key: 'ID'},
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
        IDATIV : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'ATIVIDADES', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        IDTIPOENTRADA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'TIPOSENTRADAS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        TEXTOTERMO : {
            type:sequelize.STRING,
            allowNull: false,
        },
        RESPOSTA : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        RESPMETA: {
            type:sequelize.STRING(50),
            allowNull: true,
        },
         RESPREAL: {
            type:sequelize.STRING(50),
            allowNull: true,
        },
         RESPOBJETIVO: {
            type:sequelize.STRING(50),
            allowNull: true,
        },
        GRUPO: {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        IDPADRAOENTREVISTA: {
            type:sequelize.BIGINT,
            allowNull: true,
            references: { model: 'PADRAOENTREIVSTA', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        YEAR: {
            type:sequelize.BIGINT,
            allowNull: true,
        }
    },
    {
        sequelize : connection, modelName:"RESPENTREVISTA", freezeTableName: true, schema
    }
)

export { ModelRespentrevista }