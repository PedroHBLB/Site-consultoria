import sequelize from "sequelize";
import { connection } from "../config/connection.js";

const schema = "";

class ModelPermission extends sequelize.Model {}

ModelPermission.init(
  {
    ID: {
      type: sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    IDPAPEL: {
      type: sequelize.BIGINT,
      allowNull: false,
      references: { model: 'PAPEL', key: "ID" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    CLINIVEL: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    CONIVEL: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    CONFIGNIVEL: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    WORKNIVEL: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "PERMISSION",
    freezeTableName: true,
    schema,
  }
);

export { ModelPermission };
