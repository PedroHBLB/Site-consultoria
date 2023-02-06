const input = document.getElementsByClassName("temas_input");

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("click", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let num = parseInt(pai3.getAttribute("cont"));

    if (e.target.checked) {
      if (num + 1 > 4) {
        e.target.checked = false;
        alert("Maximo de 4 Apresentações");
      } else {
        pai3.setAttribute("cont", num + 1);
      }
    } else {
      pai3.setAttribute("cont", num - 1);
    }
  });

  input[i].addEventListener("change", (e) => {
    let pai1 = e.target.parentNode
    if (e.target.checked) {
      pai1.children[1].style.color = "#1684ff";
    } else {
      pai1.children[1].style.color = "black";
    }
  });
}
