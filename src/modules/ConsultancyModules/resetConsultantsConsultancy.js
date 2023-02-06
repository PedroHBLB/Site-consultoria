import { eventsConsultant } from "/modules/ConsultancyModules/eventsConsultant.js";
import { blankConsultant } from "/modules/ConsultancyModules/blankConsultant.js";
import { ConsultancyList } from "/modules/ConsultancyModules/ConsultancyList.js";
import { ConsultantList } from "/modules/ConsultancyModules/ConsultantList.js";
import { createConsultant } from "/modules/ConsultancyModules/createConsultant.js";

export { resetConsultant };

var resetConsultant = () => {
  const consultorias = document.getElementsByClassName("consultorias")[0].textContent;
  const consultores = document.getElementsByClassName("consultores")[0].textContent;
  const num_consultoria = document.getElementsByClassName("consultorias")[0].getAttribute("consultoria_num");
  const scrollbar = document.getElementsByClassName("button_scrollbar_container")[0];
  const id = document.getElementsByName("ID")[0];
  const idcons = document.getElementsByName("IDCONS")[0];
  const nameConst = document.getElementsByName("NAMECONS")[0];

  let consultoriasLista = [];
  let consultoresLista = [];

  let chooseConsultores = [];

  ConsultancyList(consultorias, consultoriasLista)
  ConsultantList(consultores, consultoresLista)


  for (var i = 0; i < consultoriasLista.length; i++) {
    consultoriasLista[i] = JSON.parse(consultoriasLista[i]);
  }
  for (var i = 0; i < consultoresLista.length; i++) {
    consultoresLista[i] = JSON.parse(consultoresLista[i]);
  }

  let chooseConsultory = consultoriasLista[num_consultoria];

  for (var i = 0; i < consultoresLista.length; i++) {
    if (consultoresLista[i].IDCONS == chooseConsultory.ID) {
      chooseConsultores.push(consultoresLista[i]);
    }
  }

  scrollbar.innerText = "";
  createConsultant(scrollbar, chooseConsultores)

  let consultants_page = document.getElementsByClassName("ConCli_page_button_scrollbar")[0];
  blankConsultant(consultants_page)

  nameConst.value = chooseConsultory.CONSULTORIA;
  idcons.value = chooseConsultory.ID;

  eventsConsultant(scrollbar, id)
};
