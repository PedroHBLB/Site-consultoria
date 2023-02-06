import { ModelUnidades } from "../../models/unidades.js";

var controlerUnitsClientCreate = async (req, res) => {
  try {
    const create = await ModelUnidades.create({
      IDEMP: req.body.IDEMP,
      UN_NOME: req.body.UN_NOME,
      UN_END: req.body.UN_END,
      UN_NUM: req.body.UN_NUM,
      UN_CMPL: req.body.UN_CMPL,
      UN_BAIR: req.body.UN_BAIR,
      UN_MUNI: req.body.UN_MUNI,
      UN_ESTADO: req.body.UN_ESTADO,
      UN_PAIS: req.body.UN_PAIS,
      UN_CEP: req.body.UN_CEP
    });
    res.render("Screens/forms", { texto: "Unidade criada com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerUnitsClientEdit = async (req, res) => {
  try {
    const update = await ModelUnidades.update(
      {
        UN_NOME: req.body.UN_NOME,
        UN_END: req.body.UN_END,
        UN_NUM: req.body.UN_NUM,
        UN_CMPL: req.body.UN_CMPL,
        UN_BAIR: req.body.UN_BAIR,
        UN_MUNI: req.body.UN_MUNI,
        UN_ESTADO: req.body.UN_ESTADO,
        UN_PAIS: req.body.UN_PAIS,
        UN_CEP: req.body.UN_CEP
      },
      {
        where: {
          ID: req.body.ID,
        },
      }
    );
    res.render("Screens/forms", { texto: "Unidade editada com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerUnitsClientDelete = async (req, res) => {
  try {
    const destroy = await ModelUnidades.destroy({
      where: {
        ID: req.body.ID
      }
    });
    res.render("Screens/forms", { texto: "Unidade deletada com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerUnitsClientCreate,
  controlerUnitsClientEdit,
  controlerUnitsClientDelete,
};
