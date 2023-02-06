import { colorView } from "/modules/ChangeColorButton/workshopChange.js";

const entrevistas = document.getElementsByClassName("row_workshop_padraoentrevista");

for (var i = 0; i < entrevistas.length; i++) {
  entrevistas[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    for (var j = 0; j < entrevistas.length; j++) {
      entrevistas[j].style.background = "white";
      entrevistas[j].setAttribute("color", "white");
    }
    let row = e.target;
    let crud = pai2.children[1].children[0];

    row.setAttribute("color", "gray");
    row.style.background = "lightgray";
    crud.setAttribute("num", 1);
    crud.children[3].textContent = row.children[3].textContent;
  });
}

colorView(entrevistas);
