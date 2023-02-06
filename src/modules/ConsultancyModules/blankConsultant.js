export { blankConsultant };

var blankConsultant = (page) => {
  for (var j = 0; j < page.children[0].children.length; j++) {
    var button_temp = document.getElementsByClassName("consultants_button")[j];
    button_temp.style.boxShadow = "0px 0px 0px 0px white";
  }

  var row_1 = page.children[2].children[0];
  var row_2 = page.children[2].children[1];
  var row_3 = page.children[2].children[2];

  var column_1_1 = row_1.children[0].children[1];
  var column_1_2 = row_1.children[1].children[1];
  var column_2_1 = row_2.children[0].children[1];
  var column_2_2 = row_2.children[1].children[1];
  var select_1 = row_3.children[0].children[1].children[0];
  var select_2 = row_3.children[1].children[1].children[0];
  var radio_1 = document.getElementsByName("status_consultant");

  column_1_1.value = "";
  column_1_2.value = "";
  column_2_1.value = "";
  column_2_2.value = "";

  select_1.value = "Líder/Encarregado de Equipe (Consultoria)"
  select_2.value === "pt-BR"

  radio_1[0].checked = false;
  radio_1[1].checked = false;
};

