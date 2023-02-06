import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelRegentrevista extends sequelize.Model{}

ModelRegentrevista.init(
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
        IDSCH : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'SCHEDULE', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize : connection, modelName:"REGENTREVISTA", freezeTableName: true, schema
    }
)

export { ModelRegentrevista }