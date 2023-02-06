import { blankClient } from "/modules/ClientsModules/blankClient.js";

const reset_button_info = document.getElementsByClassName("ACR_reset_button")[0];
const reset_button_schedule = document.getElementsByClassName("ACR_reset_button")[1];

reset_button_info.addEventListener("click", (e) => {
  let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
  var page = pai4.children[0];
  blankClient(page);
});

reset_button_schedule.addEventListener("click", (e) => {
  let pai3 = e.target.parentNode.parentNode.parentNode
  var row = pai3.children[1];
  var colunm_1 = row.children[0].children[1];
  var colunm_2 = row.children[1].children[1];
  var colunm_3 = row.children[2].children[1];

  colunm_1.value = "";
  colunm_2.value = "";
  colunm_3.value = "";
});
