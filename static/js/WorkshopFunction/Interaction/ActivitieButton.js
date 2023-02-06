const allButton = document.getElementsByClassName("workshop_activite_button");
const allActivities = document.getElementsByClassName(
  "workshop_activities_content"
);
const allEntrevistas = document.getElementsByClassName(
  "row_workshop_padraoentrevista"
);
for (var i = 0; i < allButton.length; i++) {
  allButton[i].addEventListener("click", (e) => {
    for (var j = 0; j < allActivities.length; j++) {
      if (
        allActivities[j].children[0].getAttribute("door") == "open" &&
        allActivities[j].children[0] != e.target
      ) {
        allActivities[j].children[0].setAttribute("door", "close");
        allActivities[j].children[1].style.display = "none";
        allActivities[j].children[2].style.display = "none";
      }
    }
    let pai1 = e.target.parentNode
    let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode

    let button = e.target;
    let crudButton = pai1.children[1];
    let content = pai1.children[2];
    let crudActivities = pai5.children[1];

    if (button.getAttribute("door") === "close") {
      crudButton.style.display = "flex";
      content.style.display = "flex";
      button.setAttribute("door", "open");
      crudActivities.setAttribute("number", button.getAttribute("ID"));
      if (content.children.length === 0) {
        content.style.height = "0px";
        content.style.border = "0px solid";
      }
    } else {
      crudButton.style.display = "none";
      content.style.display = "none";
      button.setAttribute("door", "close");
      crudActivities.setAttribute("number", 0);
      let crudPE = pai1.children[1].children[0];
      crudPE.setAttribute("num", -1);
      crudPE.children[3].textContent = "";
      for (var j = 0; j < allEntrevistas.length; j++) {
        allEntrevistas[j].style.background = "white";
        allEntrevistas[j].setAttribute("color", "white");
      }
    }
  });
}
