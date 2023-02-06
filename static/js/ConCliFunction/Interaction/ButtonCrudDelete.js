import { noneButton } from "/modules/ConCliModules/noneButton.js";
import { allowResponses } from "/modules/ConCliModules/allowResponses.js";
import { blockScreen } from "/modules/ConCliModules/blockScreen.js";

const crud_delete = document.getElementsByClassName("crud_button")[2];

const page_acr = document.getElementsByClassName("ACR_container");

const input = document.getElementsByClassName("input_1");
const select = document.getElementsByClassName("ConCli_select");
const square = document.getElementsByClassName("square_black");

crud_delete.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  let header = pai3.children[0];
  let navs = pai3.children[1];
  let crud = pai2;
  let main = pai3.children[3];
  let button = -1;
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
    button = 0;
  } else {
    var scrollbar = page.children[0];

    for (var i = 0; i < scrollbar.children.length; i++) {
      if (
        scrollbar.children[i].children[0].style.boxShadow === "lightgray 0px 0px 1px 10px"
      ) {
        button = i;
      }
    }
    scrollbar.style.pointerEvents = "none";
  }

  if (mode === "consultancy") {
    if (num === "0") {
      page.action = "/forms/DeleteConsultancyInfo";
    } else if (num === "1") {
      page.children[2].action = "/forms/DeleteConsultancyConsultants";
    }
  } else {
    if (num === "0") {
      page.action = "/forms/DeleteClientInfo";
    } else if (num === "1") {
      page.children[2].action = "/forms/DeleteClientUnits";
    } else if (num === "2") {
      page.children[2].action = "/forms/DeleteClientContacts";
    } else if (num === "3") {
      page.children[2].action = "/forms/DeleteClientSchedule";
    }
  }

  if (button >= 0) {
    allowResponses(input, select, square, page_acr, num)
    page_acr[num].style.pointerEvents = "auto";
    page_acr[num].children[2].style.display = "none";
  } else {
    noneButton("deletar", header, navs, crud, scrollbar, page, navSize)
  }
});
