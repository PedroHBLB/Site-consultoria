const indicadorButton = document.getElementsByClassName("indicadores_button");

if (indicadorButton != undefined) {
  for (var i = 0; i < indicadorButton.length; i++) {
    indicadorButton[i].addEventListener("click", (e) => {
      let pai1 = e.target.parentNode
      let pai3 = e.target.parentNode.parentNode.parentNode
      let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
      let texto = pai1.children[0].value;
      let bloco = pai4.children[1];

      if (texto != "") {
        let select = pai3.children[0].children[0];
        let number = parseInt(select.getAttribute("num"));
        select.setAttribute("num", number + 1);
        select.value = number + 1 + " Itens";
        let button = document.createElement("button");
        let name = document.createElement("p");
        let X = document.createElement("p");

        button.className += "exercice_combo_button";
        name.className += "button_text_pass";
        X.className += "ghost";

        bloco.appendChild(button);
        button.appendChild(name);
        button.appendChild(X);

        name.textContent = texto;
        X.textContent = "X";

        button.onmouseover = (e) => {
          e.target.style.background = "#3278c4";
          e.target.children[1].className = "button_text_pass";
        };

        button.onmouseout = (e) => {
          e.target.style.background = "white";
          e.target.children[1].className = "ghost";
        };

        button.addEventListener("click", (e) => {
          let pai1 = e.target.parentNode
          let pai2 = e.target.parentNode.parentNode
          pai1.removeChild(e.target);
          let select = pai2.children[0].children[0].children[0];
          let number = parseInt(select.getAttribute("num"));
          select.setAttribute("num", number - 1);
          select.value = number - 1 + " Itens";
        });
      }
    });
  }
}
