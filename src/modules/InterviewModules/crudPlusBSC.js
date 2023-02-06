import { eventsBSC } from "./eventsBSC.js";

export { crudPlusBSC };

var crudPlusBSC = (crud, buttonsContainer, resposta, BSCtipo, numperspectiva, ind, novo) => {
    let button = document.createElement("button");
      let column_1 = document.createElement("div");
      let perspectiva = document.createElement("label");
      let column_2 = document.createElement("div");
      let indicador = document.createElement("label");

      button.className = "bsc_per_button";
      column_1.className = "column_barrier";
      perspectiva.className = "bsc_per_label";
      column_2.className = "column_barrier";
      indicador.className = "bsc_per_label";

      buttonsContainer.appendChild(button); 
      button.appendChild(column_1);
      column_1.appendChild(perspectiva);
      button.appendChild(column_2);
      column_2.appendChild(indicador);

      perspectiva.textContent = BSCtipo;
      indicador.textContent = ind;
      if(novo){
        resposta += ";" + BSCtipo + ";" + numperspectiva;
      }

      button.setAttribute("resposta", resposta);
      button.setAttribute("numperspectiva", numperspectiva);
      button.setAttribute("BSCtipo", BSCtipo)

      eventsBSC(button, crud, buttonsContainer)
};
