const buttonEntrevista = document.getElementsByClassName("entrevista_button");
const ContentEntrevista = document.getElementsByClassName("entrevista_content");

for (var i = 0; i < buttonEntrevista.length; i++) {
  buttonEntrevista[i].addEventListener("click", (e) => {
    let button = e.target;
    let entrevistaContainer = e.target.parentNode;

    if (button.getAttribute("Entrevistadoor") == "close") {
      for (var j = 0; j < ContentEntrevista.length; j++) {
        ContentEntrevista[j].style.display = "none";
      }
      for (var j = 0; j < buttonEntrevista.length; j++) {
        buttonEntrevista[j].setAttribute("Entrevistadoor", "close");
      }

      entrevistaContainer.children[1].style.display = "flex";
      if (entrevistaContainer.children.length > 2) {
        entrevistaContainer.children[2].style.display = "none";
        entrevistaContainer.children[3].style.display = "none";
        entrevistaContainer.children[4].style.display = "none";
      }
      button.setAttribute("Entrevistadoor", "open");
    } else {
      entrevistaContainer.children[1].style.display = "none";
      if (entrevistaContainer.children.length > 2) {
        entrevistaContainer.children[2].style.display = "none";
        entrevistaContainer.children[3].style.display = "none";
        entrevistaContainer.children[4].style.display = "none";
      }
      button.setAttribute("Entrevistadoor", "close");
    }
  });
}
