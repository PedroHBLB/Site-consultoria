const selectExercice = document.getElementsByClassName("exercice_Select");

for (var j = 0; j < selectExercice.length; j++) {
  let number = selectExercice[j].getAttribute("num");
  selectExercice[j].value = number + " Itens";
}

for (var j = 0; j < selectExercice.length; j++) {
  selectExercice[j].addEventListener("change", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let divCombo = pai3.children[1];
    let num1 = e.target.getAttribute("num");
    let key = true;

    for (var i = 0; i < divCombo.children.length; i++) {
      if (divCombo.children[i].children[0].textContent === e.target.value) {
        key = false;
      }
    }
    if (key) {
      let button = document.createElement("button");
      let name = document.createElement("p");
      let X = document.createElement("p");

      button.className += "exercice_combo_button";
      name.className += "button_text_pass";
      X.className += "ghost";

      divCombo.appendChild(button);
      button.appendChild(name);
      button.appendChild(X);

      name.textContent = e.target.value;
      X.textContent = "X";
      num1 = parseInt(num1) + 1;
      e.target.value = num1 + " Itens";
      e.target.setAttribute("num", num1);

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
        let pai3 = e.target.parentNode.parentNode.parentNode
        pai1.removeChild(e.target);
        let divComboSelect = pai3.children[1].children[0].children[0].children[0];
        let num2 = divComboSelect.getAttribute("num");
        num2 = parseInt(num2) - 1;
        divComboSelect.value = num2 + " Itens";
        divComboSelect.setAttribute("num", num2);
      });
    } else {
      e.target.value = num1 + " Itens";
    }
  });
}
