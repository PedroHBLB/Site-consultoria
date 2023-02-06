import { ModelConsultor } from "../../models/consultor.js";
import { ModelConsultoria } from "../../models/consultoria.js";
import { ModelContatos } from "../../models/contatos.js";
import { ModelEmpresa } from "../../models/empresa.js";
import { ModelUnidades } from "../../models/unidades.js";
import { ModelUsuarios } from "../../models/usuarios.js";
import { ModelAreas } from "../../models/areas.js";
import { ModelSchedule } from "../../models/schedule.js";
import { ModelTarefas } from "../../models/tarefas.js";
import { ModelPapel } from "../../models/papel.js";
import { ModelLingua } from "../../models/lingua.js";

import { pushCompany } from "../../modules/ControlerLoginFirst/PushCompany.js";
import { pushUnits } from "../../modules/ControlerLoginFirst/PushUnits.js";
import { pushContacts } from "../../modules/ControlerLoginFirst/PushContacts.js";
import { adjustContacts } from "../../modules/ControlerLoginFirst/AdjustCOntacts.js";
import { pushSchedule } from "../../modules/ControlerLoginFirst/PushSchedule.js";
import { adjustSchedule } from "../../modules/ControlerLoginFirst/AdjustSchedule.js";
import { AdjustCompany } from "../../modules/ControlerLoginFirst/AdjustCompany.js";
var controlerStartLogin = async (req, res) => {
  try {
    res.cookie(
      "user",
      {email:""}
    );
    if (req.cookies.loginChances === undefined) {
      res.cookie("loginChances", "Tentativa 1");
      req.cookies.loginChances = "Tentativa 1";
    }
    if (
      req.cookies.block != "login" &&
      req.cookies.loginChances === "Bloqueado por 15 minutos"
    ) {
      res.cookie("loginChances", "Tentativa 1");
      req.cookies.loginChances = "Tentativa 1";
    }
    res.render("Screens/login", { chances: req.cookies.loginChances });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerTryLogin = async (req, res) => {
  try {
    if (req.cookies.block === "login") {
      res.render("Screens/login", { chances: req.cookies.loginChances });
    } else {
      const { email, password } = req.body;
      let door = true;

      const usuarios = await ModelUsuarios.findAll();
      const contatos = await ModelContatos.findAll();
      const consultores = await ModelConsultor.findAll();
      const empresas = await ModelEmpresa.findAll();
      const unidades = await ModelUnidades.findAll();
      const schedules = await ModelSchedule.findAll();
      const allPapel = await ModelPapel.findAll();
      const allLingua = await ModelLingua.findAll();
      const allAreas = await ModelAreas.findAll();
      const allTarefas = await ModelTarefas.findAll();
      const allConsultorias = await ModelConsultoria.findAll();

      const companys = [];
      const units = [];
      const contacts = [];
      const agendas = [];
      const linguas = [];

      allLingua.forEach(lingua => {
        linguas.push(lingua.toJSON().LaNGID)
      });

      let emailTemp = ""
      let passwordTemp = ""
      let nomeTemp = ""
      let grupoTemp = ""
      let papelTemp = ""
      let papelNameTemp = ""
      let linguaTemp = ""
      let consultoriaTemp = ""
      let empresaNameTemp = ""
      let empresaIdInicial = ""
      let idBuscaTemp = ""

      //Verifica se é administrador
      usuarios.forEach(async (person) => {
        if (person.USUA_EMAIL === email && person.USUA_SENHA === password) {
          door = false;

          empresas.forEach((empresa) => {
            pushCompany(companys, empresa)
          });
          AdjustCompany(companys);
          pushUnits(unidades, units)
          pushContacts(contatos, allPapel, contacts)
          pushSchedule(schedules, agendas)
          adjustContacts(unidades, allAreas, contacts)          
          adjustSchedule(allTarefas, agendas)

          emailTemp = person.USUA_EMAIL
          passwordTemp = person.USUA_SENHA
          nomeTemp = person.NOME
          grupoTemp = 1
          papelTemp = person.IDPAPEL
          papelNameTemp = allPapel[0].toJSON().DESCRICAO
          linguaTemp = person.USUA_LINGUA
          consultoriaTemp = 0
          empresaNameTemp = "Confederação Nacional das Indústrias - CNI"
        }
      });

      contatos.forEach((person) => {
        if (person.CT_EMAIL === email && person.CT_SENHA === password) {
          door = false;

          let consultoriaId = "";
          empresas.forEach((empresa) => {
            if (empresa.ID == person.IDEMP) {
              pushCompany(companys, empresa)
              consultoriaId = empresa.EM_IDCONS;
            }
          });
          AdjustCompany(companys);
          pushUnits(unidades, units)
          pushContacts(contatos, allPapel, contacts)
          pushSchedule(schedules, agendas)
          adjustContacts(unidades, allAreas, contacts)          
          adjustSchedule(allTarefas, agendas)

          let temp_papelName = "";
          allPapel.forEach((papel) => {
            if (parseInt(papel.ID) === parseInt(person.IDPAPEL)) {
              temp_papelName = papel.DESCRICAO;
            }
          });

          emailTemp = person.CT_EMAIL
          passwordTemp = person.CT_SENHA
          nomeTemp = person.CT_NOME
          grupoTemp = 2
          papelTemp = person.IDPAPEL
          papelNameTemp = temp_papelName
          linguaTemp = person.CT_LINGUA
          consultoriaTemp = consultoriaId
          empresaNameTemp = companys[0][2]
          idBuscaTemp = person.IDEMP
        }
      });

      consultores.forEach((person) => {
        if (person.CSTR_EMAIL === email && person.CSTR_SENHA === password) {
          door = false;

          empresas.forEach((empresa) => {
            if (empresa.EM_IDCONS == person.IDCONS) {
              pushCompany(companys, empresa)
            }
          });
          AdjustCompany(companys);
          pushUnits(unidades, units)
          pushContacts(contatos, allPapel, contacts)
          pushSchedule(schedules, agendas)
          adjustContacts(unidades, allAreas, contacts)          
          adjustSchedule(allTarefas, agendas)

          
          let temp_papelName = "";
          allPapel.forEach((papel) => {
            if (parseInt(papel.ID) === parseInt(person.IDPAPEL)) {
              temp_papelName = papel.DESCRICAO;
            }
          });


          let consultoriaNome = "";
          allConsultorias.forEach((consultoria) => {
            if (parseInt(consultoria.toJSON().ID) === parseInt(person.IDCONS)) {
              consultoriaNome = consultoria.toJSON().CONSULTORIA;
            }
          });

          emailTemp = person.CSTR_EMAIL
          passwordTemp = person.CSTR_SENHA
          nomeTemp = person.CONSULTOR
          grupoTemp = 3
          papelTemp = person.IDPAPEL
          papelNameTemp = temp_papelName
          linguaTemp = person.CSTR_LINGUA
          consultoriaTemp = person.IDCONS
          empresaNameTemp = consultoriaNome
          idBuscaTemp = person.IDCONS
        }
      });

      if(!door){
        res.cookie(
          "user",
          {
            email: emailTemp,
            password: passwordTemp,
            nome: nomeTemp,
            grupo: grupoTemp,
            papel: papelTemp,
            papelName: papelNameTemp,
            lingua: linguaTemp,
            consultoria: consultoriaTemp,
            empresaName: empresaNameTemp,
            idBusca: idBuscaTemp
          },
          { maxAge: 60000 * 60 * 24 }
        );

        if(companys.length === 0){
          empresaIdInicial = -1;
        }else{
          empresaIdInicial = companys[0][1]
        }
        const user = req.cookies.user;
        res.clearCookie("loginChances");
        res.render("Screens/main", {
          user,
          companys,
          name: nomeTemp,
          papelName: papelNameTemp,
          empresaName: empresaNameTemp,
          units,
          contacts,
          schedules: agendas,
          empresaIdInicial,
          linguas,
        });
      }

      //Usuario e Senha Errados
      if (door) {
        if (req.cookies.loginChances === "Tentativa 1") {
          res.cookie("loginChances", "Tentativa 2");
          req.cookies.loginChances = "Tentativa 2";
        } else if (req.cookies.loginChances === "Tentativa 2") {
          res.cookie("loginChances", "Tentativa 3");
          req.cookies.loginChances = "Tentativa 3";
          //Bloqueia Tela por 15 minutos, não é possivel o login
        } else if (req.cookies.loginChances === "Tentativa 3") {
          res.cookie("loginChances", "Bloqueado por 15 minutos");
          req.cookies.loginChances = "Bloqueado por 15 minutos";
          res.cookie("block", "login", { maxAge: 60000 * 15 });
        } else if (req.cookies.loginChances === "Bloqueado por 15 minutos") {
          res.cookie("loginChances", "Tentativa 1");
          req.cookies.loginChances = "Tentativa 1";
        }
        res.render("Screens/login", { chances: req.cookies.loginChances });
      }
    }
  } catch (error) {}
};

export { controlerStartLogin, controlerTryLogin };
