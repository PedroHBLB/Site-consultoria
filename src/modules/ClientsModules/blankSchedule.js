export { blankSchedule };
var blankSchedule = (page) => {
  for (var j = 0; j < page.children[0].children.length; j++) {
    var button_temp = document.getElementsByClassName("schedule_button")[j];
    button_temp.style.boxShadow = "0px 0px 0px 0px white";
  }

  var row_1 = page.children[2].children[0];
  var row_2 = page.children[2].children[1];
  var row_3 = page.children[2].children[2];

  var select_1 = row_1.children[0].children[1].children[0];
  var select_2 = row_1.children[1].children[1].children[0];
  var column_2_1 = row_2.children[0].children[1];
  var column_2_2 = row_2.children[1].children[1];
  var column_2_3 = row_2.children[2].children[1];
  var select_3 = row_3.children[0].children[1].children[0];

  column_2_1.value = "";
  column_2_2.value = "";
  column_2_3.value = "";
 

  select_1.value = "Kick Off";
  select_2.value = "Workshop de Kickoff";
  select_3.value = "Não Iniciado"

  for (var i = 0; i < select_2.options.length; i++) {
    if (select_2.options[i].getAttribute("oper") == 1) {
      select_2.options[i].style.display = "block";
    } else {
      select_2.options[i].style.display = "none";
    }
  }
};
