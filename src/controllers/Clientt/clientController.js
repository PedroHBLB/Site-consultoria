import { ModelContatos } from "../../models/contatos.js";
import { ModelConsultoria } from "../../models/consultoria.js";
import { ModelEmpresa } from "../../models/empresa.js";
import { ModelPorteempresa } from "../../models/porteempresa.js";
import { ModelSetor } from "../../models/setor.js";
import { ModelUnidades } from "../../models/unidades.js";
import { ModelAreas } from "../../models/areas.js";
import { ModelLingua } from "../../models/lingua.js";
import { ModelSchedule } from "../../models/schedule.js";
import { ModelOperacional } from "../../models/operacional.js";
import { ModelTarefas } from "../../models/tarefas.js";
import { ModelPapel } from "../../models/papel.js";
import { ModelPermission } from "../../models/permission.js";

var controlerClient = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {

      let empresa = ""
      let rob = ""
      let setor = "" 
      let consultoria = ""
      let permission;
      if (parseInt(req.query.client_id) != -1) {
        empresa = await ModelEmpresa.findByPk(req.query.client_id);
        rob = await ModelPorteempresa.findByPk(empresa.EM_IDROB);
        setor = await ModelSetor.findByPk(empresa.EM_IDSETOR);
        consultoria = await ModelConsultoria.findByPk(empresa.EM_IDCONS);
      }

      const allPermission = await ModelPermission.findAll()
      const allRob = await ModelPorteempresa.findAll();
      const allSetor = await ModelSetor.findAll();
      const allConsultoria = await ModelConsultoria.findAll();
      const unidades = await ModelUnidades.findAll({
        where: {
          IDEMP: req.query.client_id,
        },
      });
      const contatos = await ModelContatos.findAll({
        where: {
          IDEMP: req.query.client_id,
        },
      });
      const allUnidade = await ModelUnidades.findAll({
        where:{
          IDEMP: req.query.client_id,
        },
      });
      const allArea = await ModelAreas.findAll();
      const allPapel = await ModelPapel.findAll();
      const allLingua = await ModelLingua.findAll();
      const schedules = await ModelSchedule.findAll({
        where: {
          IDEMP: req.query.client_id,
        },
      });
      const allOper = await ModelOperacional.findAll();
      const allTask = await ModelTarefas.findAll();
      let taskLista = []

      let temp_empresa = {
        ID:-1,
        FLGATIVA: false,
        EM_NOME: '',
        EM_IDSETOR: '',
        EM_IDROB: '',
        EM_IDCONS: '',
        EM_CNPJ: '',
        EM_TELEMP: '',
        EM_WEBPAGE: '',
        PF_NOME: '',
        PF_CARGO: '',
        PF_TEL: '',
        PF_EMAIL: '',
        PF_APELIDO: '',
        POSICAO: ''
      }
      if (parseInt(req.query.client_id) != -1) {
        temp_empresa = empresa.toJSON();
      }
      let temp_units = [];
      let temp_contatos = [];
      let allUnidadeLista = [];
      let allAreaLista = [];
      let allLinguaLista = [];
      let temp_schedules = [];

      allUnidade.forEach((element) => {
        allUnidadeLista.push(element.toJSON());
      });
      allArea.forEach((element) => {
        allAreaLista.push(element.toJSON());
      });
      allLingua.forEach((element) => {
        allLinguaLista.push(element.toJSON());
      });

      if (req.query.client_id != -1) {
        temp_empresa.EM_IDROB = rob.toJSON().CLASSIFICACAO;
        temp_empresa.EM_IDSETOR = setor.toJSON().DESCRICAO;
        temp_empresa.EM_IDCONS = consultoria.toJSON().CONSULTORIA;
      }

      unidades.forEach((element) => {
        temp_units.push(JSON.stringify(element.toJSON()));
      });

      contatos.forEach((element) => {
        let contato = "";
        contato = element.toJSON();
        allUnidadeLista.forEach((unidade) => {
          if (parseInt(unidade.ID) === parseInt(contato.IDUNI)) {
            contato.IDUNI = unidade.UN_NOME;
          }
        });
        allAreaLista.forEach((area) => {
          if (parseInt(area.ID) === parseInt(contato.IDAREA)) {
            contato.IDAREA = area.DESCRICAO;
          }
        });
        allLinguaLista.forEach((lingua) => {
          if (parseInt(lingua.ID) === parseInt(contato.CT_LINGUA)) {
            contato.CT_LINGUA = lingua.LaNGID;
          }
        });
        allPapel.forEach((papel) => {
          if (parseInt(papel.ID) === parseInt(contato.IDPAPEL)) {
            contato.IDPAPEL = papel.DESCRICAO;
          }
        });

        temp_contatos.push(JSON.stringify(contato));
      });

      schedules.forEach((element) => {
        let schedule = element.toJSON();

        let dataPrev = schedule.DTPREV;
        dataPrev = new Date(dataPrev);
        dataPrev.setDate(dataPrev.getDate() + 1);

        let dataInic = schedule.DTINIC;
        dataInic = new Date(dataInic);
        dataInic.setDate(dataInic.getDate() + 1);

        let dataRexec = schedule.DREXEC;
        dataRexec = new Date(dataRexec);
        dataRexec.setDate(dataRexec.getDate() + 1);

        schedule.DTPREV = dataPrev;
        schedule.DTINIC = dataInic;
        schedule.DREXEC = dataRexec;

        allOper.forEach((operacional) => {
          if (parseInt(operacional.ID) === parseInt(schedule.IDOPER)) {
            schedule.IDOPER = operacional.DESCRICAO;
          }
        });
        allTask.forEach((task) => {
          if (parseInt(task.ID) === parseInt(schedule.IDTAREFA)) {
            schedule.IDTAREFA = task.DESCRICAO;
          }
        });
        temp_schedules.push(schedule);
      });

      for(var j = 0; j < temp_schedules.length; j++){
        for(var l = j; l < temp_schedules.length; l++){
          let aux = ""
          if(temp_schedules[j].DTPREV > temp_schedules[l].DTPREV){
            aux = temp_schedules[l]
            temp_schedules[l] = temp_schedules[j]
            temp_schedules[j] = aux
          }
        }
      }
      for(var j = 0; j < temp_schedules.length; j++){
        temp_schedules[j] = JSON.stringify(temp_schedules[j])
      }
      allTask.forEach((task) => {
        taskLista.push([task.DESCRICAO,task.IDOPER,task.SEQUENCIA])
      });
      let aux = []
      for(var j = 0; j<taskLista.length;j++){
        for(var l = 0; l<taskLista.length;l++){
            if(taskLista[j][2] < taskLista[l][2]){
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
          permission = permi.toJSON().CLINIVEL
        }
      })

      res.render("Screens/client", {
        user: req.cookies.user,
        company: JSON.stringify(temp_empresa),
        name: req.cookies.user.nome,
        papelName: req.cookies.user.papelName,
        empresaName: req.cookies.user.empresaName,
        selectRob: allRob,
        selectSetor: allSetor,
        selectConsultoria: allConsultoria,
        units: temp_units,
        contatcs: temp_contatos,
        selectUnidade: allUnidade,
        selectArea: allArea,
        selectLingua: allLingua,
        schedules: temp_schedules,
        selectOper: allOper,
        selectTask: taskLista,
        empresaClient: req.query.client_id,
        permission
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerClient };
