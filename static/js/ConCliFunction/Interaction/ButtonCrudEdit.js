import { noneButton } from "/modules/ConCliModules/noneButton.js";
import { blockScreen } from "/modules/ConCliModules/blockScreen.js";
import { allowResponses } from "/modules/ConCliModules/allowResponses.js";

const crud_edit = document.getElementsByClassName("crud_button")[1];

const page_acr = document.getElementsByClassName("ACR_container");

const input = document.getElementsByClassName("input_1");
const select = document.getElementsByClassName("ConCli_select");
const square = document.getElementsByClassName("square_black");

crud_edit.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  var header = pai3.children[0];
  var navs = pai3.children[1];
  var crud = pai2;
  var main = pai3.children[3];
  var button = -1;
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
    button = 0;
  } else {
    var scrollbar_button = page.children[0];

    for (var i = 0; i < scrollbar_button.children.length; i++) {
      if (scrollbar_button.children[i].children[0].style.boxShadow === "lightgray 0px 0px 1px 10px") {
        button = i;
      }
    }
    scrollbar_button.style.pointerEvents = "none";
    page.children[2].style.pointerEvents = "auto";
  }

  if (mode === "consultancy") {
    if (num === "0") {
      page.action = "/forms/EditConsultancyInfo";
    } else if (num === "1") {
      page.children[2].action = "/forms/EditConsultancyConsultants";
    }
  } else {
    if (num === "0") {
      page.action = "/forms/EditClientInfo";
    } else if (num === "1") {
      page.children[2].action = "/forms/EditClientUnits";
    } else if (num === "2") {
      page.children[2].action = "/forms/EditClientContacts";
    } else if (num === "3") {
      page.children[2].action = "/forms/EditClientSchedule";
    }
  }
  if (button >= 0) {
    allowResponses(input, select, square, page_acr, num)
  } else {
    noneButton("editar", header, navs, crud, scrollbar_button, page, navSize)
  }
});
