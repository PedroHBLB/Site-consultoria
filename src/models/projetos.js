import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelProjetos extends sequelize.Model{}

ModelProjetos.init(
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
        NOME : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        DESCRICAO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        OBJETIVO : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        ESTADOATUAL : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        ESTADOMETA : {
            type:sequelize.TEXT,
            allowNull: false,
        },
        PESSOAS : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        EQUIPAMENTOS : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        PROCESSO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        MONITORAMENTO : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        TECNOLOGIA : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },
        INDUSTRIA : {
            type:sequelize.BOOLEAN,
            allowNull: false,
        },    
        TEXTPESSOAS : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        TEXTEQUIPAMENTOS : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        TEXTPROCESSO : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        TEXTMONITORAMENTO : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        TEXTTECNOLOGIA : {
            type:sequelize.TEXT,
            allowNull: true,
        },
        TEXTINDUSTRIA : {
            type:sequelize.TEXT,
            allowNull: true,
        },         
    },
    {
        sequelize : connection, modelName:"PROJETOS", schema
    }
)

export { ModelProjetos }