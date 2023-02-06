import { buttonClick } from "/modules/ChangePagesModules/buttonClick.js";
import { buttonAllowed } from "/modules/ChangePagesModules/buttonAllowed.js";
import { hiddenPage } from "/modules/ChangePagesModules/hiddenPage.js";
import { colorNav } from "/modules/ChangeColorButton/navChange.js";


const main_sucess = document.getElementById("page_sucess");
const main_top = document.getElementById("page_top");
const main_invest = document.getElementById("page_invest");
const main_tech = document.getElementById("page_tech");

const sucess = document.getElementsByClassName("nav_button")[0];
const toptarget = document.getElementsByClassName("nav_button")[1];
const invest = document.getElementsByClassName("nav_button")[2];
const tech = document.getElementsByClassName("nav_button")[3];

const navs = document.getElementsByClassName("nav_button");

buttonClick(sucess);
buttonAllowed([toptarget, invest, tech]);
main_sucess.style.display = "flex";
hiddenPage([main_top, main_invest, main_tech]);

sucess.addEventListener("click", (e) => {
  buttonClick(sucess);
  buttonAllowed([toptarget, invest, tech]);
  main_sucess.style.display = "flex";
  hiddenPage([main_top, main_invest, main_tech]);
});
toptarget.addEventListener("click", (e) => {
  buttonClick(toptarget);
  buttonAllowed([sucess, invest, tech]);
  main_top.style.display = "flex";
  hiddenPage([main_sucess, main_invest, main_tech]);
});
invest.addEventListener("click", (e) => {
  buttonClick(invest);
  buttonAllowed([sucess, toptarget, tech]);
  main_invest.style.display = "flex";
  hiddenPage([main_sucess, main_top, main_tech]);
});
tech.addEventListener("click", (e) => {
  buttonClick(tech);
  buttonAllowed([sucess, toptarget, invest]);
  main_tech.style.display = "flex";
  hiddenPage([main_sucess, main_top, main_invest]);
});

colorNav(navs)


