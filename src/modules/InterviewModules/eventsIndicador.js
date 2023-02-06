export { eventsIndicador };

var eventsIndicador = (button, crud, buttonsContainer) => {
  button.addEventListener("click", (e) => {
    crud.setAttribute("num", "1");
    crud.setAttribute("indicador", button.children[0].children[0].innerHTML);
    crud.setAttribute("resposta", button.getAttribute("resposta"));
    crud.setAttribute("numindicador", button.getAttribute("numindicador"));

    for(var i =0; i < buttonsContainer.children.length;i++){
        buttonsContainer.children[i].style.background = "white"
        buttonsContainer.children[i].style.pointerEvents = "auto"
    }

    button.style.background = "lightgray";
    button.style.pointerEvents = "none";
  });

  button.onmouseover = (e) => {
    button.style.background = "lightgray";
  };

  button.onmouseout = (e) => {
    if (button.style.pointerEvents == "none") {
      button.style.background = "lightgray";
    } else {
      button.style.background = "white";
    }
  };
};
