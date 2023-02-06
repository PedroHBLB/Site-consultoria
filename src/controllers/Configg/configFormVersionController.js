import { ModelVersions } from "../../models/versions.js";

var controlerVersionConfigCreate = async (req, res) => {
  try {

    if(req.body.AtivoBloqueado === "1"){
      ModelVersions.update({
        ATIVA: 0
      },{
        where:{
          ATIVA: 1
        }
      })
      }
    const versions = await ModelVersions.create({
      HISTORICO: req.body.HISTORICO,
      DATA: req.body.DATA,
      ATIVA: req.body.AtivoBloqueado
    })
    res.render("Screens/forms", { texto: "Versão criada com sucesso", page:"/configuration" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerVersionConfigEdit = async (req, res) => {
  try {
    if(req.body.AtivoBloqueado === "1"){
      ModelVersions.update({
        ATIVA: 0
      },{
        where:{
          ATIVA: 1
        }
      })
      }

    const versions = await ModelVersions.update({
      HISTORICO: req.body.HISTORICO,
      DATA: req.body.DATA,
      ATIVA: req.body.AtivoBloqueado
    },{
      where:{
        ID: req.body.IDVERSION
      }
    }
   )
    res.render("Screens/forms", { texto: "Versão editada com sucesso", page:"/configuration" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerVersionConfigDelete = async (req, res) => {
  try {
    const destroy = await ModelVersions.destroy({
      where: {
        ID: req.body.IDVERSION
      }
    });
    res.render("Screens/forms", { texto: "Versão deletada com sucesso", page:"/configuration" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerVersionConfigCreate,
  controlerVersionConfigEdit,
  controlerVersionConfigDelete,
};
