import { ModelOperacional } from "../../models/operacional.js";

var controlerOperConfigCreate = async (req, res) => {
    try {
      const operacional = await ModelOperacional.create({
        DESCRICAO: req.body.DESCRICAO,
        DETALHE: req.body.DETALHE,
        ICONE: req.body.ICONE,
        TOOLTIP: req.body.TOOLTIP
      })
      
      res.render("Screens/forms", { texto: "Operacional criado com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  var controlerOperConfigEdit = async (req, res) => {
    try {
      const operacional = await ModelOperacional.update({
        DESCRICAO: req.body.DESCRICAO,
        DETALHE: req.body.DETALHE,
        ICONE: req.body.ICONE,
        TOOLTIP: req.body.TOOLTIP
      },{
        where:{
          ID: req.body.IDOPER
        }
      }
     )
      res.render("Screens/forms", { texto: "Operacional editado com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  var controlerOperConfigDelete = async (req, res) => {
    try {
      const destroy = await ModelOperacional.destroy({
        where: {
          ID: req.body.IDOPER
        }
      });
      res.render("Screens/forms", { texto: "Operacional deletado com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  export {
    controlerOperConfigCreate,
    controlerOperConfigEdit,
    controlerOperConfigDelete,
  };
  