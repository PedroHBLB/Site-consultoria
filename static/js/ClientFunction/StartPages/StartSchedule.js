import { createSchedule } from "/modules/ClientsModules/createSchedule.js";
import { createList } from "/modules/ClientsModules/createList.js";
import { eventSchedule } from "/modules/ClientsModules/eventSchedule.js";

const company_id = document.getElementsByClassName("company")[0].textContent;
const schedules = document.getElementsByClassName("schedules")[0].textContent;
const scrollbar = document.getElementsByClassName("button_scrollbar_container")[2];
const id = document.getElementsByName("ID")[3];
const idemp = document.getElementsByName("IDEMP")[2];

let schedulesLista = [];

createList(schedules, schedulesLista)

for (var i = 0; i < schedulesLista.length; i++) {
  schedulesLista[i].DTPREV = schedulesLista[i].DTPREV.substring(0, 10);
  schedulesLista[i].DTINIC = schedulesLista[i].DTINIC.substring(0, 10);
  schedulesLista[i].DREXEC = schedulesLista[i].DREXEC.substring(0, 10);
}

idemp.value = JSON.parse(company_id).ID;

createSchedule(scrollbar, schedulesLista)
eventSchedule(scrollbar, id)