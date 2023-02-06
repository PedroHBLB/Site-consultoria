import { blankIndicador } from "/modules/InterviewModules/blankIndicador.js";
import { setResposta } from "/modules/InterviewModules/setResposta.js";
import { blankBSC } from "/modules/InterviewModules/blankBSC.js";
import { crudPlusInd } from "/modules/InterviewModules/crudPlusInd.js";
import { crudEditInd } from "/modules/InterviewModules/crudEditInd.js";
import { crudDeleteInd } from "/modules/InterviewModules/crudDeleteInd.js";
import { crudPlusBSC } from "/modules/InterviewModules/crudPlusBSC.js";
import { crudEditBSC } from "/modules/InterviewModules/crudEditBSC.js";
import { crudDeleteBSC } from "/modules/InterviewModules/crudDeleteBSC.js";

const ButtonsBarrier = document.getElementsByClassName("barrier_ind_button");
const ButtonsBSC = document.getElementsByClassName("bsc_per_button");
let NumMaior = 0;
let NumMaiorBSC = 0;
for (var i = 0; i < ButtonsBarrier.length; i++) {
  let numButton = parseInt(ButtonsBarrier[i].getAttribute("numindicador"));
  if (numButton > NumMaior) {
    NumMaior = numButton;
  }
}

for (var i = 0; i < ButtonsBSC.length; i++) {
  let numButton = parseInt(ButtonsBSC[i].getAttribute("numperspectiva"));
  if (numButton > NumMaiorBSC) {
    NumMaiorBSC = numButton;
  }
}
NumMaior += 1;
NumMaiorBSC += 1;

const accept = document.getElementsByClassName("ind_accept");

for (var i = 0; i < accept.length; i++) {
  accept[i].addEventListener("click", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let button = e.target;
    let entrevistaContent = pai3;
    let buttonsContainer = entrevistaContent.children[1].children[1];
    let containerContent = entrevistaContent.children[2];

    let mode = button.getAttribute("mode");
    let type = button.getAttribute("type");

    let resposta = "";
    let indicador = "";
    let crud = "";
    let barreira = "";
    let BSCtipo = "";
    let ind = "";

    entrevistaContent.children[0].style.display = "flex";
    entrevistaContent.children[1].style.display = "flex";
    entrevistaContent.children[2].style.display = "none";
    entrevistaContent.style.height = "20em";

    if (type == "barrier") {
      resposta = setResposta("11", resposta, containerContent);
      indicador = containerContent.getAttribute("indicador");
      crud = entrevistaContent.children[1].children[0].children[0];
      barreira = resposta.split(";")[4];
    } else if (type == "bsc") {
      resposta = setResposta("12", resposta, containerContent);
      BSCtipo = containerContent.getAttribute("bsctipo");
      crud = entrevistaContent.children[1].children[0].children[0];
      ind = resposta.split(";")[2];
    }
    if (mode === "plus" && type === "barrier") {
      let idRespen =
        entrevistaContent.children[0].children[2].getAttribute("idrespen");
      crudPlusInd(
        crud,
        buttonsContainer,
        resposta,
        indicador,
        NumMaior,
        barreira,
        idRespen
      );
      NumMaior += 1;
    } else if (mode === "edit" && type === "barrier") {
      let idRespen =
        entrevistaContent.children[0].children[2].getAttribute("idrespen");
      crudEditInd(
        containerContent,
        buttonsContainer,
        crud,
        indicador,
        barreira,
        resposta,
        idRespen
      );
    } else if (mode === "delete" && type === "barrier") {
      crudDeleteInd(containerContent, buttonsContainer, crud);
    } else if (mode === "plus" && type === "bsc") {
      crudPlusBSC(
        crud,
        buttonsContainer,
        resposta,
        BSCtipo,
        NumMaiorBSC,
        ind,
        true
      );
      NumMaiorBSC += 1;
    } else if (mode === "edit" && type === "bsc") {
      crudEditBSC(
        containerContent,
        buttonsContainer,
        crud,
        BSCtipo,
        ind,
        resposta
      );
    } else if (mode === "delete" && type === "bsc") {
      crudDeleteBSC(containerContent, buttonsContainer, crud);
    }

    if (type === "barrier") {
      blankIndicador(entrevistaContent.children[2]);
    } else if (type === "bsc") {
      blankBSC(entrevistaContent.children[2]);
    }
  });
}
