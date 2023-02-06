import { eventContact } from "/modules/ClientsModules/eventContact.js";
import { createContact } from "/modules/ClientsModules/createContact.js";
import { createList } from "/modules/ClientsModules/createList.js";

const company_id = document.getElementsByClassName("company")[0].textContent;
const contatcs = document.getElementsByClassName("contatcs")[0].textContent;
const scrollbar = document.getElementsByClassName("button_scrollbar_container")[1];
const id = document.getElementsByName("ID")[2];
const idemp = document.getElementsByName("IDEMP")[1];

let contatcsLista = [];

createList(contatcs, contatcsLista)

idemp.value = JSON.parse(company_id).ID;

createContact(scrollbar, contatcsLista)
eventContact(scrollbar, id)
