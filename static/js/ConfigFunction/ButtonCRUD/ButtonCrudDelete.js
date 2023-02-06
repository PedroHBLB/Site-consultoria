import { maintainConfig } from "/modules/ConfigModules/maintainConfig.js";

const crud_button = document.getElementsByClassName("crud_button")[2];
const primal_button = document.getElementsByClassName("config_object_button");

crud_button.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  var button = pai2[2];
  var big_button = primal_button[button.getAttribute("number") - 1];

  if (button.getAttribute("number") < 1) {
    alert("Selecione Algo");
    return;
  }
  if (big_button.getAttribute("num") === "-1") {
    alert("Selecione Algo");
    return;
  }

  var header = pai3.children[0];
  var crud_container = pai3.children[1];
  var number = crud_container.getAttribute("number");

  var view = pai3.children[2].children[0];
  var crud = pai3.children[2].children[1];

  header.style.pointerEvents = "none";
  crud_container.style.display = "none";
  view.style.display = "none";

  var form = crud.children[number - 1];

  form.style.pointerEvents = "None";
  form.style.display = "flex";
  maintainConfig(big_button.getAttribute("num"), number, form);

  if (number === "1") {
    form.action = "/forms/DeleteConfigVersion";
  } else if (number === "2") {
    form.action = "/forms/DeleteConfigOper";
  } else if (number === "3") {
    form.action = "/forms/DeleteConfigTask";
  }
});
