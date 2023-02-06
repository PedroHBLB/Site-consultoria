import { blankConsultancy } from "/modules/ConsultancyModules/blankConsultancy.js";
import { ConsultancyList } from "/modules/ConsultancyModules/ConsultancyList.js";
import { getConsultancy } from "/modules/ConsultancyModules/getConsultancy.js";

const consultorias = document.getElementsByClassName("consultorias")[0].textContent;
const num_consultoria = document.getElementsByClassName("consultorias")[0].getAttribute("consultoria_num");
const form = document.getElementById("consultancy_details");
const id = document.getElementsByName("id")[0];

let consultoriasLista = [];
let chooseConsultory = ""

ConsultancyList(consultorias, consultoriasLista)

if (consultoriasLista.length != 0) {
  chooseConsultory = JSON.parse(consultoriasLista[num_consultoria]);
} else {
  chooseConsultory = "";
}

let page = form.children[0];

if (chooseConsultory != "") {
  getConsultancy(page, chooseConsultory)
  id.value = chooseConsultory.ID;

} else {
  blankConsultancy(page)
  id.value = -1;
}
