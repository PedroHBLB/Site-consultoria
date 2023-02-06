import { blankConsultancy } from "/modules/ConsultancyModules/blankConsultancy.js";

const reset_button = document.getElementsByClassName("ACR_reset_button")[0];
reset_button.addEventListener("click", (e) => {
  var page = e.target.parentNode.parentNode.parentNode.parentNode;
  blankConsultancy(page);
});
