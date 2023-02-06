import { ModelOperacional } from "../../models/operacional.js";
import { ModelSchedule } from "../../models/schedule.js"
import { ModelTarefas } from "../../models/tarefas.js";

var controlerScheduleClientCreate = async (req, res) => {
  try {
    const oper = await ModelOperacional.findAll({
      where:{
        DESCRICAO: req.body.IDOPER
      }
    })
    const task = await ModelTarefas.findAll({
      where:{
        DESCRICAO: req.body.IDTAREFA
      }
    })
    let statusTemp = 0
    if(req.body.STATUS == "Não Iniciado"){
      statusTemp = 0
    }else if(req.body.STATUS == "Iniciado"){
      statusTemp = 1
    }else if(req.body.STATUS == "Encerrado"){
      statusTemp = 2
    }

    const createSchedule = await ModelSchedule.create({
      IDEMP: req.body.IDEMP,
      IDOPER: oper[0].toJSON().ID,
      IDTAREFA: task[0].toJSON().ID,
      DTPREV: req.body.DTPREV,
      DTINIC: req.body.DTINIC,
      DREXEC: req.body.DREXEC,
      STATUS: statusTemp
    })

    res.render("Screens/forms", { texto: "Agenda criada com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerScheduleClientEdit = async (req, res) => {
  try {
    const oper = await ModelOperacional.findAll({
      where:{
        DESCRICAO: req.body.IDOPER
      }
    })
    const task = await ModelTarefas.findAll({
      where:{
        DESCRICAO: req.body.IDTAREFA
      }
    })
    let statusTemp = 0
    if(req.body.STATUS == "Não Iniciado"){
      statusTemp = 0
    }else if(req.body.STATUS == "Iniciado"){
      statusTemp = 1
    }else if(req.body.STATUS == "Encerrado"){
      statusTemp = 2
    }
    const update = await ModelSchedule.update({
      IDEMP: req.body.IDEMP,
      IDOPER: oper[0].toJSON().ID,
      IDTAREFA: task[0].toJSON().ID,
      DTPREV: req.body.DTPREV,
      DTINIC: req.body.DTINIC,
      DREXEC: req.body.DREXEC,
      STATUS: statusTemp
    },
    {
      where: {
        ID: req.body.ID,
      },
    }
    )
    res.render("Screens/forms", { texto: "Agenda editada com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerScheduleClientDelete = async (req, res) => {
  try {
    const destroySch = await ModelSchedule.destroy({
        where: {
          ID: req.body.ID
        }
      });
      res.render("Screens/forms", { texto: "Agenda deletada com sucesso", page:"/client,"+req.body.IDEMP });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerScheduleClientCreate,
  controlerScheduleClientEdit,
  controlerScheduleClientDelete,
};

