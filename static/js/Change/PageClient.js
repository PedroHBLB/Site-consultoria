import { buttonClick } from "/modules/ChangePagesModules/buttonClick.js";
import { buttonAllowed } from "/modules/ChangePagesModules/buttonAllowed.js";
import { hiddenPage } from "/modules/ChangePagesModules/hiddenPage.js";
import { colorNav } from "/modules/ChangeColorButton/navChange.js";

const main_informations = document.getElementById("client_details");
const main_units = document.getElementsByClassName(
  "ConCli_page_button_scrollbar"
)[0];
const main_contacts = document.getElementsByClassName(
  "ConCli_page_button_scrollbar"
)[1];
const main_schedule = document.getElementsByClassName(
  "ConCli_page_button_scrollbar"
)[2];

const informations = document.getElementsByClassName("nav_button")[0];
const units = document.getElementsByClassName("nav_button")[1];
const contacts = document.getElementsByClassName("nav_button")[2];
const schedule = document.getElementsByClassName("nav_button")[3];

const navs = document.getElementsByClassName("nav_button");
const crud = document.getElementsByClassName("crud_container")[0];

buttonClick(informations);
buttonAllowed([units, contacts, schedule]);
main_informations.style.display = "flex";
hiddenPage([main_units, main_contacts, main_schedule]);

informations.addEventListener("click", (e) => {
  buttonClick(informations);
  buttonAllowed([units, contacts, schedule]);
  main_informations.style.display = "flex";
  crud.style.display = "none";
  crud.setAttribute("number", 0);
  hiddenPage([main_units, main_contacts, main_schedule]);
});
units.addEventListener("click", (e) => {
  buttonClick(units);
  buttonAllowed([informations, contacts, schedule]);
  main_units.style.display = "flex";
  crud.style.display = "none";
  crud.setAttribute("number", 1);
  hiddenPage([main_informations, main_contacts, main_schedule]);
});
contacts.addEventListener("click", (e) => {
  buttonClick(contacts);
  buttonAllowed([informations, units, schedule]);
  main_contacts.style.display = "flex";
  crud.style.display = "none";
  crud.setAttribute("number", 2);
  hiddenPage([main_informations, main_units, main_schedule]);
});
schedule.addEventListener("click", (e) => {
  buttonClick(schedule);
  buttonAllowed([informations, units, contacts]);
  main_schedule.style.display = "flex";
  crud.style.display = "none";
  crud.setAttribute("number", 3);
  hiddenPage([main_informations, main_units, main_contacts]);
});

colorNav(navs);
