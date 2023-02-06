export { eventsBSC };

var eventsBSC = (button, crud, buttonsContainer) => {
  button.addEventListener("click", (e) => {
    crud.setAttribute("num", "1");
    crud.setAttribute("BSCtipo", button.children[0].children[0].innerHTML);
    crud.setAttribute("resposta", button.getAttribute("resposta"));
    crud.setAttribute("numperspectiva", button.getAttribute("numperspectiva"));

    for (var i = 0; i < buttonsContainer.children.length; i++) {
      buttonsContainer.children[i].style.background = "white";
      buttonsContainer.children[i].style.pointerEvents = "auto";
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
