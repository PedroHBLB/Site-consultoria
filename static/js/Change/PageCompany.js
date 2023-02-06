import { buttonClick } from "/modules/ChangePagesModules/buttonClick.js";
import { buttonAllowed } from "/modules/ChangePagesModules/buttonAllowed.js";
import { hiddenPage } from "/modules/ChangePagesModules/hiddenPage.js";
import { colorNav } from '/modules/ChangeColorButton/navChange.js';;

const main_mip = document.getElementById("page_mip");
const main_project = document.getElementById("page_project");
const main_maturity = document.getElementById("page_maturity");
const main_kpi = document.getElementById("page_kpi");
const main_piramide = document.getElementById("page_piramide")

const mip = document.getElementsByClassName("nav_button")[0];
const project = document.getElementsByClassName("nav_button")[3]
const maturity = document.getElementsByClassName("nav_button")[2];
const kpi = document.getElementsByClassName("nav_button")[1];
const piramide = document.getElementsByClassName("nav_button")[4];

const navs = document.getElementsByClassName("nav_button");

buttonClick(mip);
buttonAllowed([project, maturity, kpi, piramide]);
main_mip.style.display = "flex";
hiddenPage([main_project, main_maturity, main_kpi, main_piramide]);

mip.addEventListener("click", (e) => {
  buttonClick(mip);
  buttonAllowed([project, maturity, kpi, piramide]);
  main_mip.style.display = "flex";
  hiddenPage([main_project, main_maturity, main_kpi, main_piramide]);
});

project.addEventListener("click", (e) => {
  buttonClick(project);
  buttonAllowed([mip, maturity, kpi, piramide]);
  main_project.style.display = "flex";
  hiddenPage([main_mip, main_maturity, main_kpi, main_piramide]);
});

maturity.addEventListener("click", (e) => {
  buttonClick(maturity);
  buttonAllowed([mip, project, kpi, piramide]);
  main_maturity.style.display = "flex";
  hiddenPage([main_mip, main_project, main_kpi, main_piramide]);
});

kpi.addEventListener("click", (e) => {
  buttonClick(kpi);
  buttonAllowed([mip, project, maturity, piramide]);
  main_kpi.style.display = "flex";
  hiddenPage([main_mip, main_project, main_maturity, main_piramide]);
});

piramide.addEventListener("click", (e) => {
  buttonClick(piramide);
  buttonAllowed([mip, project, maturity, kpi]);
  main_piramide.style.display = "flex";
  hiddenPage([main_mip, main_project, main_maturity, main_kpi]);
})

colorNav(navs)
