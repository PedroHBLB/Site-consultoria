import { blockScreen } from "/modules/ConCliModules/blockScreen.js";
import { allowResponses } from "/modules/ConCliModules/allowResponses.js";
import { blankClient } from "/modules/ClientsModules/blankClient.js";
import { blankConsultancy } from "/modules/ConsultancyModules/blankConsultancy.js";
import { blankConsultant } from "/modules/ConsultancyModules/blankConsultant.js";
import { blankUnit } from "/modules/ClientsModules/blankUnit.js";
import { blankContact } from "/modules/ClientsModules/blankContact.js";
import { blankSchedule } from "/modules/ClientsModules/blankSchedule.js";

const crud_plus = document.getElementsByClassName("crud_button")[0];
const page_acr = document.getElementsByClassName("ACR_container");

const input = document.getElementsByClassName("input_1");
const select = document.getElementsByClassName("ConCli_select");
const square = document.getElementsByClassName("square_black");

crud_plus.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  var header = pai3.children[0];
  var navs = pai3.children[1];
  var crud = pai2;
  var main = pai3.children[3];
  let mode = pai3.getAttribute("mode");
  let navSize = 0;
  if (mode === "consultancy") {
    navSize = 2;
  } else {
    navSize = 4;
  }

  let numPage = blockScreen(main, header, navs, crud, navSize)
  let num = numPage[0]
  let page = numPage[1]
  if (num === "0") {
    page.style.pointerEvents = "auto";
    if (mode === "consultancy") {
      page.children[0].style.pointerEvents = "auto";
    }
  } else {
    page.children[0].style.pointerEvents = "none";
    page.children[2].style.pointerEvents = "auto";
  }

  if (mode === "consultancy") {
    if (num === "0") {
      blankConsultancy(page);
      page.action = "/forms/CreateConsultancyInfo";
    } else if (num === "1") {
      blankConsultant(page)
      page.children[2].action = "/forms/CreateConsultancyConsultants";
      page.children[2].children[1].style.pointerEvents = "auto";
    }
  } else {
    if (num === "0") {
      blankClient(page);
      page.action = "/forms/CreateClientInfo";
    } else if (num === "1") {
      blankUnit(page)
      page.children[2].action = "/forms/CreateClientUnits";
    } else if (num === "2") {
      blankContact(page)
      page.children[2].action = "/forms/CreateClientContacts";
    } else if (num === "3") {
      blankSchedule(page)
      page.children[2].action = "/forms/CreateClientSchedule";
    }
  }
  allowResponses(input, select, square, page_acr, num)
});
