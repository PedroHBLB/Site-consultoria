const editButton = document.getElementsByClassName("projeto_edit_button");

for (var i = 0; i < editButton.length; i++) {
  editButton[i].style.background = "white";
}

for (var i = 0; i < editButton.length; i++) {
  editButton[i].onmouseover = function (e) {
    console.log("dasds")
    let editButton = e.target;
    if (editButton.style.background === "white") {
      editButton.style.background = "#1684ff";
      editButton.style.color = "white";
    }
  };

  editButton[i].onmouseout = function (e) {
    let editButton = e.target;
    if (editButton.style.background === "rgb(22, 132, 255)") {
      editButton.style.background = "white";
      editButton.style.color = "#1684ff";
    }
  };
}

for (var i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    let editButton = e.target;
    if (editButton.style.background === "rgb(22, 132, 255)") {
      editButton.style.background = "black";
      pai2.children[0].style.pointerEvents = "auto";
      pai5.children[0].children[1].style.pointerEvents = "none";
    } else if (editButton.style.background === "black") {
      editButton.style.background = "white";
      editButton.style.color = "rgb(22, 132, 255)";
      pai2.children[0].style.pointerEvents = "none";
      pai5.children[0].children[1].style.pointerEvents = "auto";
    }
  });
}
