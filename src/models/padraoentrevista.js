import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelPadraoentrevista extends sequelize.Model{}

ModelPadraoentrevista.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
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
        TEXTO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        SEQUENCIA : {
            type:sequelize.BIGINT,
            allowNull: false,
        },
        IDCLASS : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'CLASSETERMOS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        IDOBJ : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'OBJETIVOS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        FLGINOUT : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        IDTIPOENTRADA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'TIPOSENTRADAS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        FLAGMETA : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        FLAGREAL : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        FLAGOBJETIVO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        COMBOSOURCE : {
            type:sequelize.STRING(50),
            allowNull: false,
        },
        SLIDERMIN : {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        SLIDERMAX : {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        FILESOURCE : {
            type:sequelize.STRING,
            allowNull: false,
        },
        FILENAME : {
            type:sequelize.STRING,
            allowNull: true,
        },
        IDESCALA : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'ESCALAS', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        TOOLTIP : {
            type:sequelize.STRING,
            allowNull: false,
        },
        FILETYPE : {
            type:sequelize.STRING(20),
            allowNull: true,
        },
        GRUPO : {
            type:sequelize.BOOLEAN,
            allowNull: true,
        },
       
    },
    {
        sequelize : connection, modelName:"PADRAOENTREVISTA", freezeTableName: true, schema
    }
)

export { ModelPadraoentrevista }