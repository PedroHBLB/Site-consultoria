const oper = document.getElementsByClassName("schedule_select")[0];
const task = document.getElementsByClassName("schedule_select")[1];
const options_oper = document.getElementsByClassName("options_oper");

oper.addEventListener("change", (e) => {
  let selectOper = e.target;
  let idoper = "";
  for (var i = 0; i < selectOper.children.length; i++) {
    if (selectOper.children[i].value == selectOper.value) {
      idoper = selectOper.children[i].getAttribute("oper");
    }
  }

  let first = false;
  for (var i = 0; i < task.children.length; i++) {
    if (task.children[i].getAttribute("oper") == idoper) {
      if (first == false) {
        task.value = task.children[i].value;
        first = true;
      }
      task.children[i].style.display = "block";
    } else {
      task.children[i].style.display = "none";
    }
  }
});
