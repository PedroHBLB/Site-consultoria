import { ModelOperacional } from "../../models/operacional.js";
import { ModelTarefas } from "../../models/tarefas.js";

var controlerTaskConfigCreate = async (req, res) => {
    try {
      const operacional = await ModelOperacional.findAll({
        where:{
          DESCRICAO:req.body.IDOPER
        }
      })

      let taskTable = await ModelTarefas.findAll({
        where:{
          IDOPER: operacional[0].toJSON().ID,
          SEQUENCIA: parseInt(req.body.SEQUENCIA)
        }
      })
      let taskTemp = parseInt(req.body.SEQUENCIA)
      while(true){
        if(taskTable[0] == undefined){
          break;
        }else{
          taskTemp++
          taskTable = await ModelTarefas.findAll({
            where:{
              IDOPER: operacional[0].toJSON().ID,
              SEQUENCIA: parseInt(taskTemp)
            }
          })
        }
      }

      const tarefa = await ModelTarefas.create({
        IDOPER: operacional[0].toJSON().ID,
        DESCRICAO: req.body.DESCRICAO,
        INCLUIREGISTRO: 0,
        SEQUENCIA: taskTemp,
        TOOLTIP: req.body.TOOLTIP
      })
      
      res.render("Screens/forms", { texto: "Tarefa criada com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  var controlerTaskConfigEdit = async (req, res) => {
    try {
      const operacional = await ModelOperacional.findAll({
        where:{
          DESCRICAO:req.body.IDOPER
        }
      })
      let taskTable = await ModelTarefas.findAll({
        where:{
          IDOPER: operacional[0].toJSON().ID,
          SEQUENCIA: parseInt(req.body.SEQUENCIA)
        }
      })
      let taskTemp = parseInt(req.body.SEQUENCIA)
      while(true){
        if(taskTable[0] == undefined || taskTable[0].toJSON().ID == req.body.IDTASK){
          break;
        }else{
          taskTemp++
          taskTable = await ModelTarefas.findAll({
            where:{
              IDOPER: operacional[0].toJSON().ID,
              SEQUENCIA: parseInt(taskTemp)
            }
          })
        }
      }
      const tarefa = await ModelTarefas.update({
        IDOPER: operacional.ID,
        DESCRICAO: req.body.DESCRICAO,
        INCLUIREGISTRO: 0,
        SEQUENCIA: taskTemp,
        TOOLTIP: req.body.TOOLTIP
      },{
        where:{
          ID: req.body.IDTASK
        }
      })
      res.render("Screens/forms", { texto: "Tarefa editada com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  var controlerTaskConfigDelete = async (req, res) => {
    try {
      const destroy = await ModelTarefas.destroy({
        where: {
          ID: req.body.IDTASK
        }
      });
      res.render("Screens/forms", { texto: "Tarefa deletada com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  export {
    controlerTaskConfigCreate,
    controlerTaskConfigEdit,
    controlerTaskConfigDelete,
  };
  