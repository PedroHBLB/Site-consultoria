export {createSchedule}

import { modifyData } from "/modules/modifyDate.js";

var createSchedule = (scrollbar, schedulesLista)=>{
    schedulesLista.forEach((schedule) => {
        let divButton = document.createElement('div')
        let button = document.createElement("button");
        let icon = document.createElement("i");
        let line = document.createElement("hr");
        let task = document.createElement("label");
        let dtprevText = document.createElement("p");
        let dtprevLabel = document.createElement("label");
        let dtinicText = document.createElement("p");
        let dtinicLabel = document.createElement("label");
        let drexecText = document.createElement("p");
        let drexecLabel = document.createElement("label");
        let atributos = document.createElement("p");
      
        divButton.className = "model_button"
        button.className +="all_button scroll_button larger_scroll_button schedule_button";
        icon.className += "fa-solid fa-calendar-days button_icon";
        line.className += "button_middle_line";
        task.className += "button_title_2";
        dtprevText.className += "button_text";
        dtprevLabel.className += "button_label";
        dtinicText.className += "button_text";
        dtinicLabel.className += "button_label";
        drexecText.className += "button_text";
        drexecLabel.className += "button_label";
        atributos.className += "ghost";
      
        scrollbar.appendChild(divButton);
        divButton.appendChild(button)
        button.appendChild(icon);
        button.appendChild(line);
        button.appendChild(task);
        button.appendChild(dtprevText);
        button.appendChild(dtprevLabel);
        button.appendChild(dtinicText);
        button.appendChild(dtinicLabel);
        button.appendChild(drexecText);
        button.appendChild(drexecLabel);
        button.appendChild(atributos);
      
        let dtprev = modifyData(schedule.DTPREV);
        let dtinic = modifyData(schedule.DTINIC);
        let drexec = modifyData(schedule.DREXEC);
      
        task.textContent = schedule.IDTAREFA;
        dtprevText.textContent = "Data Prevista";
        dtprevLabel.textContent = dtprev;
        dtinicText.textContent = "Data de Inicio Real";
        dtinicLabel.textContent = dtinic;
        drexecText.textContent = "Data de Termino Real";
        drexecLabel.textContent = drexec;
        atributos.textContent =
          schedule.ID +
          ";" +
          schedule.IDOPER +
          ";" +
          schedule.IDTAREFA +
          ";" +
          schedule.DTPREV +
          ";" +
          schedule.DTINIC +
          ";" +
          schedule.DREXEC +
          ";" +
          schedule.STATUS;
      });
}