import { ModelContatos } from "../../models/contatos.js";
import { ModelUnidades } from "../../models/unidades.js";
import { ModelAreas } from "../../models/areas.js";
import { ModelPapel } from "../../models/papel.js";

var controlerContactsClientCreate = async (req, res) => {
  try {
    const unidade = await ModelUnidades.findAll({
      where: {
        UN_NOME: req.body.IDUNI,
        IDEMP: req.body.IDEMP,
      },
    });
    const papel = await ModelPapel.findAll({
      where:{
        DESCRICAO: req.body.IDPAPEL
      }
    });
    const area = await ModelAreas.findAll({
      where: {
        DESCRICAO: req.body.IDAREA,
      },
    });


    const create = await ModelContatos.create({
      IDEMP: req.body.IDEMP,
      IDUNI: unidade[0].toJSON().ID,
      IDPAPEL: papel[0].toJSON().ID,
      CT_NOME: req.body.CT_NOME,
      CT_CARGO: req.body.CT_CARGO,
      CT_TEL: req.body.CT_TEL,
      CT_EMAIL: req.body.CT_EMAIL,
      IDAREA: area[0].toJSON().ID,
      CT_SENHA: "@1234",
      CT_LINGUA: req.body.CT_LINGUA,
    });

    res.render("Screens/forms", { texto: "Contato criado com sucesso", page:"/client,"+req.body.IDEMP});
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerContactsClientEdit = async (req, res) => {
  try {
    const unidade = await ModelUnidades.findAll({
      where: {
        UN_NOME: req.body.IDUNI,
      },
    });
    const papel = await ModelPapel.findAll({
      where:{
        DESCRICAO: req.body.IDPAPEL
      }
    });
    const area = await ModelAreas.findAll({
      where: {
        DESCRICAO: req.body.IDAREA,
      },
    });
    const update = await ModelContatos.update(
      {
        IDUNI: unidade[0].toJSON().ID,
        IDPAPEL: papel[0].toJSON().ID,
        CT_NOME: req.body.CT_NOME,
        CT_CARGO: req.body.CT_CARGO,
        CT_TEL: req.body.CT_TEL,
        CT_EMAIL: req.body.CT_EMAIL,
        IDAREA: area[0].toJSON().ID,
        CT_LINGUA: req.body.CT_LINGUA,
      },
      {
        where: {
          ID: req.body.ID,
        },
      }
    );
    res.render("Screens/forms", { texto: "Contato editado com sucesso", page:"/client,"+req.body.IDEMP});
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerContactsClientDelete = async (req, res) => {
  try {
    const destroy = await ModelContatos.destroy({
      where: {
        ID: req.body.ID,
      },
    });
    res.render("Screens/forms", { texto: "Contato deletado com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerContactsClientCreate,
  controlerContactsClientEdit,
  controlerContactsClientDelete,
};
