const Nivel = document.getElementsByClassName("papel")[0].textContent;
const button_cruds = document.getElementsByClassName("crud_button");

if (Nivel === "1") {
  //Todos Livres
} else if (Nivel === "2") {
  button_cruds[0].className += " crud_ghost_button";
  button_cruds[2].className += " crud_ghost_button";
}else if (Nivel === "3") {
  button_cruds[1].className += " crud_ghost_button";
  button_cruds[2].className += " crud_ghost_button";
}else if (Nivel === "4") {
  button_cruds[0].className += " crud_ghost_button";
  button_cruds[1].className += " crud_ghost_button";
}else if (Nivel === "5") {
  button_cruds[1].className += " crud_ghost_button";
  button_cruds[2].className += " crud_ghost_button";
}else if (Nivel === "6") {
  button_cruds[0].className += " crud_ghost_button";
  button_cruds[1].className += " crud_ghost_button";
}else if (Nivel === "7") {
  button_cruds[0].className += " crud_ghost_button";
  button_cruds[2].className += " crud_ghost_button";
}else if (Nivel === "8") {
  button_cruds[0].className += " crud_ghost_button";
  button_cruds[1].className += " crud_ghost_button";
  button_cruds[2].className += " crud_ghost_button";
}
