import { createUnit } from "/modules/ClientsModules/createUnit.js";
import { createList } from "/modules/ClientsModules/createList.js";
import { eventUnit } from "/modules/ClientsModules/eventUnit.js";

const company_id = document.getElementsByClassName("company")[0].textContent;
const units = document.getElementsByClassName("units")[0].textContent;
const scrollbar = document.getElementsByClassName("button_scrollbar_container")[0];
const id = document.getElementsByName("ID")[1];
const idemp = document.getElementsByName("IDEMP")[0];

let unidadesLista = [];

createList(units, unidadesLista)

idemp.value = JSON.parse(company_id).ID;

createUnit(scrollbar, unidadesLista)
eventUnit(scrollbar, id)
