import { ModelContatos } from "../../models/contatos.js";
import { ModelEmpresa } from "../../models/empresa.js";
import { ModelUnidades } from "../../models/unidades.js";
import { ModelAreas } from "../../models/areas.js";
import { ModelSchedule } from "../../models/schedule.js";
import { ModelTarefas } from "../../models/tarefas.js";
import { ModelPapel } from "../../models/papel.js";

import { pushCompany } from "../../modules/ControlerLoginFirst/PushCompany.js";
import { pushUnits } from "../../modules/ControlerLoginFirst/PushUnits.js";
import { pushContacts } from "../../modules/ControlerLoginFirst/PushContacts.js";
import { adjustContacts } from "../../modules/ControlerLoginFirst/AdjustCOntacts.js";
import { pushSchedule } from "../../modules/ControlerLoginFirst/PushSchedule.js";
import { adjustSchedule } from "../../modules/ControlerLoginFirst/AdjustSchedule.js";
import { AdjustCompany } from "../../modules/ControlerLoginFirst/AdjustCompany.js";

var controlerMain = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      const contatos = await ModelContatos.findAll();
      const empresas = await ModelEmpresa.findAll();
      const unidades = await ModelUnidades.findAll();
      const schedules = await ModelSchedule.findAll();
      const allPapel = await ModelPapel.findAll();
      const allAreas = await ModelAreas.findAll();
      const allTarefas = await ModelTarefas.findAll();

      const companys = [];
      const units = [];
      const contacts = [];
      const agendas = [];
      let empresaIdInicial = ""

      if (req.cookies.user.grupo == "1") {
        empresas.forEach((empresa) => {
          pushCompany(companys, empresa)
        });
        AdjustCompany(companys)
        pushUnits(unidades, units)
        pushContacts(contatos, allPapel, contacts)
        pushSchedule(schedules, agendas)
        adjustContacts(unidades, allAreas, contacts)          
        adjustSchedule(allTarefas, agendas)

      } else if (req.cookies.user.grupo == "2") {
        empresas.forEach((empresa) => {
          if (empresa.ID == req.cookies.user.idBusca) {
            pushCompany(companys, empresa)
          }
        });
        AdjustCompany(companys)
        pushUnits(unidades, units)
        pushContacts(contatos, allPapel, contacts)
        pushSchedule(schedules, agendas)
        adjustContacts(unidades, allAreas, contacts)          
        adjustSchedule(allTarefas, agendas)
      } else {
        empresas.forEach((empresa) => {
          if (empresa.EM_IDCONS == req.cookies.user.idBusca) {
            pushCompany(companys, empresa)
          }
        });
        AdjustCompany(companys)
        pushUnits(unidades, units)
        pushContacts(contatos, allPapel, contacts)
        pushSchedule(schedules, agendas)
        adjustContacts(unidades, allAreas, contacts)          
        adjustSchedule(allTarefas, agendas)
      }

      if(companys.length === 0){
        empresaIdInicial = -1;
      }else{
        empresaIdInicial = companys[0][1]
      }
      res.render("Screens/main", {
        user: req.cookies.user,
        companys,
        name: req.cookies.user.nome,
        papelName: req.cookies.user.papelName,
        empresaName: req.cookies.user.empresaName,
        units,
        contacts,
        schedules: agendas,
        empresaIdInicial,
        linguas: req.cookies.user.linguas
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerMain };
