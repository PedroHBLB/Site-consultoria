import { eventsIndicador } from "./eventsIndicador.js";

export { crudPlusInd };

var crudPlusInd = (crud, buttonsContainer, resposta, indicador, numindicador, barreira, idrespen) => {

  let button = document.createElement("button");
  let column_1 = document.createElement("div");
  let ind = document.createElement("label");
  let column_2 = document.createElement("div");
  let barreir = document.createElement("label");

  button.className = "barrier_ind_button";
  column_1.className = "column_barrier";
  ind.className = "barrier_ind_label";
  column_2.className = "column_barrier";
  barreir.className = "barrier_ind_label";

  buttonsContainer.appendChild(button);
  button.appendChild(column_1);
  column_1.appendChild(ind);
  button.appendChild(column_2);
  column_2.appendChild(barreir);

  ind.textContent = indicador;
  barreir.textContent = barreira;
  resposta += ";" + indicador + ";" + numindicador + ";" + idrespen;
  button.setAttribute("resposta", resposta);
  button.setAttribute("numindicador", numindicador);
  button.setAttribute("indicador", indicador)
  button.setAttribute("idrespen", idrespen)

  eventsIndicador(button, crud, buttonsContainer);
};
