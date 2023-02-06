const select_oper = document.getElementsByClassName("workshop_select")[0];
const select_task = document.getElementsByClassName("workshop_select")[1];

for (var i = 0; i < select_task.options.length; i++) {
  if (
    select_task.options[i].getAttribute("idoper") !=
    select_oper.options[0].getAttribute("idoper")
  ) {
    select_task.options[i].style.display = "none";
  }
}

select_oper.addEventListener("change", (e) => {
  let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
  let num = e.target.options.selectedIndex;
  let oper = e.target.options[num].getAttribute("idoper");
  let activities = pai5.children[1].children[0];
  let first = true;

  for (var i = 0; i < select_task.options.length; i++) {
    if (select_task.options[i].getAttribute("idoper") === oper) {
      select_task.options[i].style.display = "block";
      if (first) {
        select_task.value = select_task.options[i].value;

        let idoper = select_task.options[i].getAttribute("idoper");
        let idtarefa = select_task.options[i].getAttribute("idtarefa");

        for (var j = 0; j < activities.children.length; j++) {
          if (
            activities.children[j].getAttribute("idoper") === idoper &&
            activities.children[j].getAttribute("idtarefa") === idtarefa
          ) {
            activities.children[j].style.display = "flex";
          } else {
            activities.children[j].style.display = "none";
          }
        }
        first = false;
      }
    } else {
      select_task.options[i].style.display = "none";
    }
  }
});
