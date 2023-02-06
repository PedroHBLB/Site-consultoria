const projectButton = document.getElementsByClassName("project_button");

if (projectButton.length > 0) {
  for (var i = 0; i < projectButton.length; i++) {
    if (i % 5 === 0) {
      projectButton[i].style.background = "#3278c4";
      projectButton[i].style.color = "white";
      projectButton[i].style.pointerEvents = "none";
    } else {
      projectButton[i].style.background = "white";
    }

    projectButton[i].onmouseover = function (e) {
      if (e.target.style.background === "white") {
        e.target.style.background = "#1684ff";
        e.target.style.color = "white";
      }
    };

    projectButton[i].onmouseout = function (e) {
      if (e.target.style.background === "rgb(22, 132, 255)") {
        e.target.style.background = "white";
        e.target.style.color = "#1684ff";
      }
    };

    projectButton[i].addEventListener("click", (e) => {
      let pai2 = e.target.parentNode.parentNode
      let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
      for (var j = 0; j < pai2.children.length; j++) {
        pai2.children[j].children[0].style.background = "white";
        pai2.children[j].children[0].style.color = "#1684ff";
        pai2.children[j].children[0].style.pointerEvents = "auto";
      }
      e.target.style.background = "#3278c4";
      e.target.style.color = "white";
      e.target.style.pointerEvents = "none";
      let atribButton = e.target.getAttribute("tipo");
      let divContent = pai4.children[1];
      for (var j = 0; j < divContent.children.length; j++) {
        if (divContent.children[j].getAttribute("tipo") == atribButton) {
          divContent.children[j].style.display = "flex";
        } else {
          divContent.children[j].style.display = "none";
        }
      }
    });
  }
}
