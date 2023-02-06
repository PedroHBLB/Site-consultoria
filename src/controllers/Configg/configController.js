import { ModelOperacional } from "../../models/operacional.js";
import { ModelPermission } from "../../models/permission.js";
import { ModelTarefas } from "../../models/tarefas.js";
import { ModelVersions } from "../../models/versions.js";
import { modifyData } from "../../modules/modifyDate.js";

var controlerConfig = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      const allVersions = await ModelVersions.findAll();
      const allOper = await ModelOperacional.findAll();
      const allTask = await ModelTarefas.findAll();
      const allPermission = await ModelPermission.findAll();
      const allPermissionRulles = await ModelPermission.findAll();

      let versions = [];
      let opers = [];
      let tasks = [];
      let permission = []
      let rullesPermission;
      let posicao = 0;

      allVersions.forEach((version) => {
        versions.push([
          version.HISTORICO,
          version.DATA,
          version.ATIVA,
          version.ID,
        ]);
      });
      allOper.forEach((oper) => {
        opers.push([
          oper.DESCRICAO,
          oper.DETALHE,
          oper.ICONE,
          oper.TOOLTIP,
          oper.ICONE,
          oper.ID,
        ]);
      });
      allTask.forEach((task) => {
        tasks.push([
          task.IDOPER,
          task.DESCRICAO,
          task.SEQUENCIA,
          task.TOOLTIP,
          task.ID,
        ]);
      });
      allPermission.forEach((permi) => {
        permission.push([
          permi.CLINIVEL,
          permi.CONIVEL,
          permi.CONFIGNIVEL,
          permi.WORKNIVEL,
        ]);
      });



      for (var i = 0; i < opers.length; i++) {
        let aux = [];
        for (var j = 0; j < tasks.length; j++) {
          if (opers[i][5] == tasks[j][0]) {
            aux = tasks[posicao];
            tasks[posicao] = tasks[j];
            tasks[j] = aux;
            posicao++;
          }
        }
      }
      for (var i = 0; i < opers.length; i++) {
        let aux = [];
        for (var j = 0; j < tasks.length; j++) {
          for (var l = 0; l < tasks.length; l++) {
            if (
              opers[i][5] == tasks[j][0] &&
              opers[i][5] == tasks[l][0] &&
              tasks[j][2] < tasks[l][2]
            ) {
              aux = tasks[l];
              tasks[l] = tasks[j];
              tasks[j] = aux;
            }
          }
        }
      }

      for (var i = 0; i < versions.length; i++) {
        versions[i][1] = modifyData(versions[i][1]);
        if (versions[i][2]) {
          versions[i][2] = "1";
        } else {
          versions[i][2] = "0";
        }
      }

      let img = {
        0: "Operational/kick.png",
        1: "Operational/align.png",
        2: "Operational/today.png",
        3: "Operational/diag.png",
        4: "Operational/recom.png",
        5: "Operational/action.png",
        6: "Operational/close.png",
      };

      for (var i = 0; i < opers.length; i++) {
        opers[i][2] = img[opers[i][2]];
      }

      for (var i = 0; i < tasks.length; i++) {
        let temoOper = await ModelOperacional.findByPk(parseInt(tasks[i][0]));
        tasks[i][0] = temoOper.DESCRICAO;
      }

      allPermissionRulles.forEach((permi)=>{
        if(permi.toJSON().IDPAPEL == req.cookies.user.papel){
          rullesPermission = permi.toJSON().CONFIGNIVEL
        }
      })

      res.render("Screens/configuration", {
        user: req.cookies.user,
        name: req.cookies.user.nome,
        papelName: req.cookies.user.papelName,
        empresaName: req.cookies.user.empresaName,
        versions,
        opers,
        tasks,
        permission,
        rullesPermission
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerConfig };
