import { blankConsultant } from "/modules/ConsultancyModules/blankConsultant.js";
import { resetConsultancy } from "/modules/ConsultancyModules/resetInfoConsultancy.js";
import { ResetInfoCli } from "/modules/ClientsModules/ResetInfoClient.js";
import { blankUnit } from "/modules/ClientsModules/blankUnit.js";
import { blankContact } from "/modules/ClientsModules/blankContact.js";
import { blankSchedule } from "/modules/ClientsModules/blankSchedule.js";

const ACR_cancel = document.getElementsByClassName("ACR_button");

const page_acr = document.getElementsByClassName("ACR_container");

const input = document.getElementsByClassName("input_1");
const select = document.getElementsByClassName("ConCli_select");
const square = document.getElementsByClassName("square_black");
for (var i = 1; i < 3 * page_acr.length; i += 3) {
  ACR_cancel[i].addEventListener("click", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode;
    let pai4 = e.target.parentNode.parentNode.parentNode.parentNode;
    let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    let pai6 =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode;
    let mode = "";
    let navSize = 0;
    let tipo = e.target.getAttribute("tipo");
    if (tipo === "detailsClient") {
      var header = pai5.children[0];
      var navs = pai5.children[1];
      var crud = pai5.children[2];
      var page = pai3;
      mode = pai5.getAttribute("mode");
    }else if(tipo === "detailsConsult"){
      var header = pai6.children[0];
      var navs = pai6.children[1];
      var crud = pai6.children[2];
      var page = pai4;
      mode = pai6.getAttribute("mode");
    } else if (tipo === "consult") {
      /*consultoria */
      var header = pai6.children[0];
      var navs = pai6.children[1];
      var crud = pai6.children[2];
      var page = pai4;
      mode = pai6.getAttribute("mode");
    } else {
      /*cliente*/
      var header = pai6.children[0];
      var navs = pai6.children[1];
      var crud = pai6.children[2];
      var page = pai4;
      mode = pai6.getAttribute("mode");
    }
    if (mode === "consultancy") {
      navSize = 2;
    } else {
      navSize = 4;
    }
    var num = crud.getAttribute("number");

    header.style.pointerEvents = "auto";
    navs.style.pointerEvents = "auto";
    for (var i = 0; i < navSize; i++) {
      if (navs.children[i].style.background !== "gray") {
        navs.children[i].style.pointerEvents = "auto";
      }
    }

    if (num === "0") {
      if (mode === "consultancy") {
        page.children[0].style.pointerEvents = "none";
      } else {
        page.style.pointerEvents = "none";
      }
    } else {
      page.children[2].style.pointerEvents = "none";
      page.children[0].style.pointerEvents = "auto";
      if (num === "3") {
        page.children[2].children[1].style.pointerEvents = "";
      }
    }

    if (mode === "consultancy") {
      if (num === "0") {
        var info_page = document.getElementById("consultancy_details");
        var info_consultancy = info_page.children[0];
        resetConsultancy(info_consultancy);
      } else {
        blankConsultant(page);
      }
    } else {
      if (num === "0") {
        var info_page = document.getElementById("client_details");
        ResetInfoCli(page);
      } else {
        if (num === "1") {
          blankUnit(page);
        } else if (num === "2") {
          blankContact(page);
        } else if (num === "3") {
          blankSchedule(page);
        }
      }
    }

    for (var i = 0; i < input.length; i++) {
      input[i].style.background = "rgb(220, 220, 220)";
      input[i].style.border = "2px solid";
    }

    for (var i = 0; i < select.length; i++) {
      select[i].style.background = "rgb(220, 220, 220)";
      select[i].style.border = "2px solid";
    }

    for (var i = 0; i < square.length; i++) {
      square[i].style.background = "gray";
      square[i].style.border = "2px solid";
    }

    page_acr[num].children[2].style.display = "flex";
    page_acr[num].style.display = "none";
  });
}
