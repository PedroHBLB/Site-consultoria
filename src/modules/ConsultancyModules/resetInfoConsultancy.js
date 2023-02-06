import { setConsultancy } from "/modules/ConsultancyModules/setConsultancy.js";
import { blankConsultancy } from "/modules/ConsultancyModules/blankConsultancy.js";
import { ConsultancyList } from "/modules/ConsultancyModules/ConsultancyList.js";

export { resetConsultancy };

var resetConsultancy = (page) => {
  const num_consultoria = document.getElementsByClassName("consultorias")[0].getAttribute("consultoria_num");
  const consultorias = document.getElementsByClassName("consultorias")[0].textContent;
  const id = document.getElementsByName("id")[0];
  let consultoriasLista = [];

  ConsultancyList(consultorias, consultoriasLista)

  let chooseConsultory = "";
  if (consultoriasLista.length != 0) {
    chooseConsultory = JSON.parse(consultoriasLista[num_consultoria]);
  } else {
    chooseConsultory = "";
  }

  if (chooseConsultory != "") {
    setConsultancy(page, chooseConsultory)
    id.value = chooseConsultory.ID;
  }else{
    blankConsultancy(page)
    id.value = -1;
  }
};
