import { blankConfig } from "/modules/ConfigModules/blankConfig.js";

const acr_button = document.getElementsByClassName("ACR_button");

for (var i = 2; i < acr_button.length; i += 2) {
  acr_button[i].addEventListener("click", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    var header = pai6.children[0];
    var crud_container = pai6.children[1];
    var view = pai6.children[2].children[0];
    var page = pai3;

    blankConfig(page, crud_container.getAttribute("number"))
    header.style.pointerEvents = "auto"
    page.style.pointerEvents = "auto"
    page.style.display = "none"
    view.style.display = "flex"
  });
}
