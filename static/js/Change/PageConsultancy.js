import { buttonClick } from "/modules/ChangePagesModules/buttonClick.js";
import { buttonAllowed } from "/modules/ChangePagesModules/buttonAllowed.js";
import { colorNav } from "/modules/ChangeColorButton/navChange.js";

const main_informations = document.getElementById("consultancy_details");
const main_consultant = document.getElementsByClassName(
  "ConCli_page_button_scrollbar"
)[0];

const informations = document.getElementsByClassName("nav_button")[0];
const consult = document.getElementsByClassName("nav_button")[1];

const navs = document.getElementsByClassName("nav_button");
const crud = document.getElementsByClassName("crud_container")[0];

buttonClick(informations);
buttonAllowed([consult]);

informations.addEventListener("click", (e) => {
  main_consultant.style.display = "none";
  main_informations.style.display = "grid";
  crud.style.display = "none";
  crud.setAttribute("number", 0);

  buttonClick(informations);
  buttonAllowed([consult]);
});
consult.addEventListener("click", (e) => {
  main_consultant.style.display = "flex";
  main_informations.style.display = "none";
  crud.style.display = "none";
  crud.setAttribute("number", 1);

  buttonClick(consult);
  buttonAllowed([informations]);
});

colorNav(navs);
