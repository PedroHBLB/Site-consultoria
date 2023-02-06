import { setResposta } from "/modules/InterviewModules/setResposta.js";
import { setMetaRealObj } from "/modules/InterviewModules/setMetaRealObj.js";
import { changeAnswer } from "/modules/InterviewModules/changeAnswer.js";
import { changeSelectBarrier } from "/modules/InterviewModules/changeSelectBarrier.js";
import { createAnswer } from "/modules/InterviewModules/createAnswer.js";
import { removeAnswerInd } from "/modules/InterviewModules/removeAnswerInd.js";
import { createAnswerInd } from "/modules/InterviewModules/createAnswerInd.js";
import { validaProject } from "/modules/InterviewModules/validaProject.js";
import { setRespostaProject } from "/modules/InterviewModules/setRespostaProject.js";
import { createAnswerProject } from "/modules/InterviewModules/createAnswerProject.js";

const SaveButtonPD = document.getElementsByClassName(
  "save_padraoentrevista_button"
);
const SaveButtonInd = document.getElementsByClassName(
  "save_indicadoronly_button"
);
const SavaProject = document.getElementsByClassName("save_project_button");
const SendContainer = document.getElementsByClassName("Send_container")[0];
let cont = 0;
for (var i = 0; i < SaveButtonPD.length; i++) {
  SaveButtonPD[i].addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    let pai2 = e.target.parentNode.parentNode
    let pai3 = e.target.parentNode.parentNode.parentNode
    let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
        
    let texto = pai1.children[2].textContent.split(";");
    let tipoentrada = texto[0];
    let resposta = "";
    let meta = "";
    let real = "";
    let obj = "";

    if (tipoentrada < 30) {
      if (tipoentrada == 12) {
        resposta = setResposta(12.5, resposta, e);
      } else {
        resposta = setResposta(tipoentrada, resposta, e);
      }
      let MRO = setMetaRealObj(meta, real, obj, e);
      meta = MRO[0];
      real = MRO[1];
      obj = MRO[2];

      let idPD = e.target.getAttribute("entrevistaID");

      let json = {
        IDSCH: SendContainer.getAttribute("idregen"),
        IDVERSAO: texto[1],
        IDOPER: texto[2],
        IDTAREFA: texto[3],
        IDATIV: texto[4],
        IDTIPOENTRADA: texto[0],
        TEXTOTERMO: texto[5],
        GRUPO: texto[6],
        RESPOSTA: resposta,
        META: meta,
        REAL: real,
        OBJ: obj,
        IDPADRAOENTREVISTA: idPD,
        TYPE: "normal",
      };

      let key = changeAnswer(SendContainer, json);

      let atividade = pai4;
      let entrevista = pai3;
      let door = false;

      changeSelectBarrier(atividade, entrevista, door, json);

      createAnswer(SendContainer, key, json, cont);
      cont++;
    }
  });
}

const barriers = document.getElementsByClassName("many_barriers");
const respBarrier = document.getElementsByClassName("respBarrier");

for (var i = 0; i < respBarrier.length; i++) {
  let text = respBarrier[i].children[2].textContent;
  respBarrier[i].setAttribute("resposta", text);
}

for (var i = 0; i < barriers.length; i++) {
  let texto = barriers[i].children[0].children[2].textContent.split(";");
  let crudBarrier = barriers[i].children[1].children[1];
  let resposta = "";
  resposta = setResposta(11.3, resposta, crudBarrier);
  let resp = resposta.split("?");
  let grupo = barriers[i].getAttribute("grupo");
  if (texto[1] != "") {
    for (var l = 0; l < resp.length - 1; l++) {
      let tempResp = resp[l].split(";");
      let json = {
        IDPADRAOENTREVISTA: texto[0],
        INDICADOR: tempResp[11],
        NUMINDICADOR: tempResp[12],
        TIPOENTRADA: 11,
        RESPOSTA: resp[l],
        IDRESPEN: tempResp[13],
        TYPE: "indicador",
        GRUPO: grupo,
      };

      createAnswerInd(SendContainer, json, cont);
      cont++;
    }
  }
}

for (var i = 0; i < SaveButtonInd.length; i++) {
  SaveButtonInd[i].addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    let texto = pai1.children[2].textContent.split(";");
    let textoID = pai1.children[2].getAttribute("idrespen");
    let resposta = "";
    resposta = setResposta(11.5, resposta, e);
    let resp = resposta.split("?");
    let grupo = e.target.getAttribute("grupo");

    removeAnswerInd(SendContainer, grupo);

    for (var l = 0; l < resp.length - 1; l++) {
      let tempResp = resp[l].split(";");

      let json = {
        IDPADRAOENTREVISTA: texto[0],
        INDICADOR: tempResp[11],
        NUMINDICADOR: tempResp[12],
        TIPOENTRADA: 11,
        IDRESPEN: tempResp[13],
        RESPOSTA: resp[l],
        TYPE: "indicador",
        GRUPO: grupo,
      };

      createAnswerInd(SendContainer, json, cont);
      cont++;
    }

    if (resp.length === 1) {
      let json = {
        IDPADRAOENTREVISTA: texto[0],
        INDICADOR: "vazio",
        NUMINDICADOR: "vazio",
        TIPOENTRADA: 11,
        IDRESPEN: textoID,
        RESPOSTA: "vazio",
        TYPE: "vazio",
        GRUPO: grupo,
      };

      createAnswerInd(SendContainer, json, cont);
      cont++;
    }
    alert("Resposta Salva");
  });
}

for (var i = 0; i < SavaProject.length; i++) {
  SavaProject[i].addEventListener("click", (e) => {
    let projectID = e.target.getAttribute("projectid");
    let tipo = e.target.getAttribute("tipo");
    let key = validaProject(SendContainer, tipo, projectID);
    let resposta = "";
    if (key) {
      resposta = setRespostaProject(tipo, resposta, e);

      let json = {
        IDPROJETO: projectID,
        TIPOENTRADA: 14.5,
        RESPOSTA: resposta,
        TYPE: "projeto",
        MODE: tipo,
      };

      createAnswerProject(SendContainer, json, cont);
      cont++;
      alert("Resposta Salva");
    } else {
      alert("Não é possivel salvar, projeta será deletado");
    }
  });
}
