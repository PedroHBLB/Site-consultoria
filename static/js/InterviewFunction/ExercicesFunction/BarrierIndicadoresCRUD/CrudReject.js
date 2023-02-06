import { blankIndicador } from "/modules/InterviewModules/blankIndicador.js";
import { blankBSC } from "/modules/InterviewModules/blankBSC.js";

const reject = document.getElementsByClassName("ind_reject");

for (var i = 0; i < reject.length; i++) {
  reject[i].addEventListener("click", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let entrevistaContent = pai3;
    entrevistaContent.children[0].style.display = "flex";
    entrevistaContent.children[1].style.display = "flex";
    entrevistaContent.children[2].style.display = "none";
    entrevistaContent.style.height = "20em";

    entrevistaContent.children[2].style.pointerEvents = "auto";
    if (entrevistaContent.getAttribute("tipoentrada") == "11") {
      blankIndicador(entrevistaContent.children[2]);
    } else {
      blankBSC(entrevistaContent.children[2]);
    }
  });
}
