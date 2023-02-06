const ButtonTask = document.getElementsByClassName("ativs_button");
const ContainerTask = document.getElementsByClassName("task_container");

for (var i = 0; i < ButtonTask.length; i++) {
  ButtonTask[i].addEventListener("click", (e) => {
    let button = e.target;
    let taskContainer = e.target.parentNode;

    if (button.getAttribute("Taskdoor") == "close") {
      for (var j = 0; j < ButtonTask.length; j++) {
        for (var l = 1; l < ContainerTask[j].children.length; l++) {
          ContainerTask[j].children[l].style.display = "none";
        }

        ButtonTask[j].setAttribute("Taskdoor", "close");
      }

      for (var j = 1; j < taskContainer.children.length; j++) {
        taskContainer.children[j].style.display = "flex";
      }
      button.setAttribute("Taskdoor", "open");
    } else {
      for (var j = 1; j < taskContainer.children.length; j++) {
        taskContainer.children[j].style.display = "none";
      }
      button.setAttribute("Taskdoor", "close");
    }
  });
}
