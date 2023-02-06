const select_oper = document.getElementsByClassName("workshop_select")[0];
const select_task = document.getElementsByClassName("workshop_select")[1];
const allActivities = document.getElementsByClassName(
  "workshop_content_container"
)[0];

let first = true;
for (var i = 0; i < allActivities.children.length; i++) {
  if (
    allActivities.children[i].getAttribute("idoper") ===
      select_oper.options[0].getAttribute("idoper") &&
    allActivities.children[i].getAttribute("idtarefa") ===
      select_task.options[0].getAttribute("idtarefa")
  ) {
    allActivities.children[i].style.display = "flex";
  } else {
    allActivities.children[i].style.display = "none";
  }
}

select_task.addEventListener("change", (e) => {
  let pai3 = e.target.parentNode.parentNode.parentNode
  let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
  let oper = pai3.children[0].children[1].children[0];
  let task = e.target;

  let numOper =
    pai3.children[0].children[1].children[0].options.selectedIndex;
  let numTask = e.target.options.selectedIndex;
  let idoper = oper.options[numOper].getAttribute("idoper");
  let idtarefa = task.options[numTask].getAttribute("idtarefa");

  let activities = pai5.children[1].children[0];

  for (var i = 0; i < activities.children.length; i++) {
    if (
      activities.children[i].getAttribute("idoper") === idoper &&
      activities.children[i].getAttribute("idtarefa") === idtarefa
    ) {
      activities.children[i].style.display = "flex";
    } else {
      activities.children[i].style.display = "none";
    }
  }
});
