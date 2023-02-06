const config_object_button = document.getElementsByClassName(
  "config_object_button"
)[2];
const buttonTasks = document.getElementsByClassName("task_button_config");
const taskID = document.getElementsByClassName("task_id")[0];

for (var i = 0; i < buttonTasks.length; i++) {
  buttonTasks[i].addEventListener("click", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let button = e.target;
    let step = pai3.children[2].children[0].children[1];
    let obj = pai3.children[2].children[1].children[1];
    let sequence = pai3.children[2].children[2].children[1];

    let atributos = button.children[3].textContent.split(";");

    step.textContent = atributos[0];
    obj.textContent = atributos[1];
    sequence.textContent = atributos[2];
    taskID.value = atributos[4];

    let button_temp = document.getElementsByClassName("task_button_config");
    for (var j = 0; j < button_temp.length; j++) {
      button_temp[j].style.boxShadow = "0px 0px 0px 0px white";
    }

    button.style.boxShadow = "0px 0px 1px 10px lightgray";
    config_object_button.setAttribute("num", 1);
  });
}
