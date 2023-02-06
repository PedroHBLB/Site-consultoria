import { ModelAtividades } from "../../models/atividades.js";
import { ModelOperacional } from "../../models/operacional.js";
import { ModelTarefas } from "../../models/tarefas.js";
import { ModelPapel } from "../../models/papel.js";
import { ModelClassetermos } from "../../models/classetermos.js";
import { ModelTiposentradas } from "../../models/tipoesentradas.js";
import { ModelObjetivos } from "../../models/objetivos.js";
import { ModelEscalas } from "../../models/escalas.js";
import { ModelFontecombos } from "../../models/fontecombos.js";
import { ModelPadraoentrevista } from "../../models/padraoentrevista.js";
import { ModelPermission } from "../../models/permission.js";

var controlerWorkshop = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      const oper = await ModelOperacional.findAll();
      const task = await ModelTarefas.findAll();
      const activities = await ModelAtividades.findAll();
      const allClassetermos = await ModelClassetermos.findAll();
      const allTiposentradas = await ModelTiposentradas.findAll();
      const allObjetivos = await ModelObjetivos.findAll();
      const allEscalas = await ModelEscalas.findAll();
      const allCombos = await ModelFontecombos.findAll();
      const padraentrevista = await ModelPadraoentrevista.findAll();
      const allPermission = await ModelPermission.findAll()

      let permission;
      let comboList = [];
      var padraentrevistaList = [];
      let aux = [];
      let taskLista = []
      let activitiesTask = []
      allCombos.forEach((combo) => {
        let tempCombo = combo.toJSON();
        let key = 0;
        for (var i = 0; i < comboList.length; i++) {
          if (tempCombo.FONTE === comboList[i][0]) {
            key = 1;
          }
        }
        if (key === 0) {
          comboList.push([tempCombo.FONTE, tempCombo.TEXTO]);
        }
      });

      padraentrevista.forEach((entrevista) => {
        let tempEntrevista = entrevista.toJSON();
        padraentrevistaList.push(tempEntrevista);
      });

      for(var i = 0; i < padraentrevistaList.length;i++){
        let classe = await ModelClassetermos.findAll({
          where: {
            ID: padraentrevistaList[i].IDCLASS,
          },
        });
        let obj = await ModelObjetivos.findAll({
          where:{
            ID: padraentrevistaList[i].IDOBJ
          }
        })
        let entrada = await ModelTiposentradas.findAll({
          where:{
            ID: padraentrevistaList[i].IDTIPOENTRADA
          }
        })
        let combo = await ModelFontecombos.findAll({
          where:{
            ID: padraentrevistaList[i].COMBOSOURCE
          }
        })
        let escala = await ModelEscalas.findAll({
          where:{
            ID: padraentrevistaList[i].IDESCALA
          }
        })
        padraentrevistaList[i].IDCLASS = classe[0].toJSON().CLASSE
        padraentrevistaList[i].IDOBJ = obj[0].toJSON().DESCRICAO
        padraentrevistaList[i].IDTIPOENTRADA = entrada[0].toJSON().TIPOS
        padraentrevistaList[i].COMBOSOURCE = combo[0].toJSON().FONTE
        padraentrevistaList[i].IDESCALA = escala[0].toJSON().DESCRICAO
      }
      for(var j = 0; j<padraentrevistaList.length;j++){
        for(var l = 0; l<padraentrevistaList.length;l++){
            if(parseInt(padraentrevistaList[j].SEQUENCIA) < parseInt(padraentrevistaList[l].SEQUENCIA)){
                aux = padraentrevistaList[l]
                padraentrevistaList[l] = padraentrevistaList[j]
                padraentrevistaList[j] = aux
            }
        }
      }

      
      activities.forEach((activitie) => {
        activitiesTask.push([activitie.ID,activitie.SEQUENCIA,activitie.DESCRICAO,activitie.INCLUIREGISTRO,activitie.INDIVIDGRUPO,activitie.TOOLTIP,activitie.IDOPER,activitie.IDTAREFA])
      });
      for(var j = 0; j<activitiesTask.length;j++){
        for(var l = 0; l<activitiesTask.length;l++){
            if(activitiesTask[j][1] < activitiesTask[l][1]){
                aux = activitiesTask[l]
                activitiesTask[l] = activitiesTask[j]
                activitiesTask[j] = aux
            }
        }
      } 


      task.forEach((task) => {
        taskLista.push([task.ID,task.IDOPER,task.DESCRICAO,task.SEQUENCIA])
      });
      for(var j = 0; j<taskLista.length;j++){
        for(var l = 0; l<taskLista.length;l++){
            if(taskLista[j][3] < taskLista[l][3]){
                aux = taskLista[l]
                taskLista[l] = taskLista[j]
                taskLista[j] = aux
            }
        }
      }  
      for(var i = 0; i<taskLista.length;i++){
        if(taskLista[i][1] == 1){
          aux = taskLista[0]
          taskLista[0] = taskLista[i]
          taskLista[i] = aux
          break
        }
      }

      allPermission.forEach((permi)=>{
        if(permi.toJSON().IDPAPEL == req.cookies.user.papel){
          permission = permi.toJSON().WORKNIVEL
        }
      })
      
      res.render("Screens/workshop", {
        user: req.cookies.user,
        company: req.query.company,
        name: req.cookies.user.nome,
        papelName: req.cookies.user.papelName,
        empresaName: req.cookies.user.empresaName,
        oper,
        task: taskLista,
        activities: activitiesTask,
        classes: allClassetermos,
        entradas: allTiposentradas,
        objetivos: allObjetivos,
        escalas: allEscalas,
        combos: comboList,
        entrevistas: padraentrevistaList,
        permission
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerWorkshop };
