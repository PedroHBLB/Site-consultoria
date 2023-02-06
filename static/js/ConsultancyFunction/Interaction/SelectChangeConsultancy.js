import { resetConsultant } from "/modules/ConsultancyModules/resetConsultantsConsultancy.js";
import { ConsultancyList } from "/modules/ConsultancyModules/ConsultancyList.js";
import { resetConsultancy } from "/modules/ConsultancyModules/resetInfoConsultancy.js";

const form = document.getElementById("consultancy_details");
const consultancy_select =
  document.getElementsByClassName("consultancy_select")[0];
const consultorias = document.getElementsByClassName("consultorias")[0];

let consultoriasLista = [];

ConsultancyList(consultorias.textContent, consultoriasLista);

for (var i = 0; i < consultoriasLista.length; i++) {
  consultoriasLista[i] = JSON.parse(consultoriasLista[i]);
}

if (consultancy_select != undefined) {
  for (var i = 0; i < consultoriasLista.length; i++) {
    let option = document.createElement("option");
    option.textContent = consultoriasLista[i].CONSULTORIA;
    consultancy_select.appendChild(option);
  }
}

if (consultancy_select != undefined) {
  consultancy_select.addEventListener("change", (e) => {
    let num_consultoria = 0;
    for (var i = 0; i < consultoriasLista.length; i++) {
      if (consultoriasLista[i].CONSULTORIA == e.target.value) {
        num_consultoria = i;
      }
    }
    consultorias.setAttribute("consultoria_num", num_consultoria);
    resetConsultancy(form.children[0]);
    resetConsultant();
  });
}
