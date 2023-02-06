const zeroConsultoria = document.getElementsByClassName("idclient")[0];

const crud_button = document.getElementsByClassName("crud_button");
const navegation = document.getElementsByClassName("navegation_container")[0];
if (zeroConsultoria.textContent === "-1") {
  for (var i = 1; i < crud_button.length; i++) {
    crud_button[i].className += " crud_ghost_button";
  }
  for (var i = 0; i < navegation.children.length; i++) {
    navegation.children[i].style.pointerEvents = "none";
  }
}
