import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelSchedule extends sequelize.Model{}

ModelSchedule.init(
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
        DTPREV : {
            type:sequelize.DATEONLY,
            allowNull: false,
        },
        DTINIC : {
            type:sequelize.DATEONLY,
            allowNull: true,
        },
        DREXEC : {
            type:sequelize.DATEONLY,
            allowNull: true,
        },
        STATUS : {
            type:sequelize.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"SCHEDULE", freezeTableName: true, schema
    }
)

export { ModelSchedule }