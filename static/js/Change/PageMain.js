import { buttonClick } from "/modules/ChangePagesModules/buttonClick.js";
import { buttonAllowed } from "/modules/ChangePagesModules/buttonAllowed.js";
import { hiddenPage } from "/modules/ChangePagesModules/hiddenPage.js";
import { colorNav } from "/modules/ChangeColorButton/navChange.js";

const info = document.getElementsByClassName("main_nav_button");
const units = document.getElementsByClassName("main_nav_button");
const contacts = document.getElementsByClassName("main_nav_button");
const schedule = document.getElementsByClassName("main_nav_button");
const navs = document.getElementsByClassName("main_nav_button");

for (var i = 0; i < navs.length; i += 4) {
  info[i].addEventListener("click", (e) => {
    let buttonInfo = e.target
    let pai1 = e.target.parentNode
    let pai2 = pai1.parentNode

    buttonClick(buttonInfo);
    buttonAllowed([pai1.children[1], pai1.children[2], pai1.children[3]]);
    pai2.children[2].children[0].style.display = "flex";
    hiddenPage([pai2.children[2].children[1],pai2.children[2].children[2],pai2.children[2].children[3]]);
  });

  units[i + 1].addEventListener("click", (e) => {
    let buttonUnits = e.target
    let pai1 = e.target.parentNode
    let pai2 = pai1.parentNode

    buttonClick(buttonUnits);
    buttonAllowed([pai1.children[0], pai1.children[2], pai1.children[3]]);
    pai2.children[2].children[1].style.display = "flex";
    hiddenPage([pai2.children[2].children[0],pai2.children[2].children[2],pai2.children[2].children[3]]);
  });

  contacts[i + 2].addEventListener("click", (e) => {
    let buttonContacts = e.target
    let pai1 = e.target.parentNode
    let pai2 = pai1.parentNode

    buttonClick(buttonContacts);
    buttonAllowed([pai1.children[0], pai1.children[1],pai1.children[3]]);
    pai2.children[2].children[2].style.display = "flex";
    hiddenPage([pai2.children[2].children[0],pai2.children[2].children[1],pai2.children[2].children[3]]);
  });

  schedule[i + 3].addEventListener("click", (e) => {
    let buttonSchedule = e.target
    let pai1 = e.target.parentNode
    let pai2 = pai1.parentNode

    buttonClick(buttonSchedule);
    buttonAllowed([pai1.children[0], pai1.children[1], pai1.children[2]]);
    pai2.children[2].children[3].style.display = "flex";
    hiddenPage([pai2.children[2].children[0],pai2.children[2].children[1],pai2.children[2].children[2]]);
  });
}

colorNav(navs);
