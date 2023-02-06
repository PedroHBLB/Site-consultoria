const ButtonChangeEntrevista = document.getElementsByClassName(
  "change_entrevista_button"
);

for (var i = 0; i < ButtonChangeEntrevista.length; i++) {
  ButtonChangeEntrevista[i].addEventListener("click", (e) => {
    let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
    let button = e.target;
    let EntrevistaContainer = pai4;
    for (var j = 1; j < EntrevistaContainer.children.length; j++) {
      if (
        EntrevistaContainer.children[j].getAttribute("grupo") ==
        button.getAttribute("num")
      ) {
        EntrevistaContainer.children[j].style.display = "flex";
      } else {
        EntrevistaContainer.children[j].style.display = "none";
      }
    }
  });
}
