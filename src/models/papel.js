import sequelize from "sequelize"
import { connection } from "../config/connection.js";

const schema = ""

class ModelPapel extends sequelize.Model{}

ModelPapel.init(
    {
        ID : {
            type:sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDGRUPO : {
            type:sequelize.BIGINT,
            allowNull: false,
            references: { model: 'GRUPO', key: 'ID'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        DESCRICAO : {
            type:sequelize.STRING,
            allowNull: false,
        },
        NIVEL : {
            type:sequelize.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize : connection, modelName:"PAPEL", freezeTableName: true, schema
    }
)

export { ModelPapel }