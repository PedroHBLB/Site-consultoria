export { blankConfig };

var blankConfig = (page, number) => {
  if (number == 1) {
    var row_1 = page.children[0];

    var column_1 = row_1.children[0].children[1];
    var column_2 = row_1.children[1].children[1];
    var radio_1 = document.getElementsByName("AtivoBloqueado");

    column_1.value = "";
    column_2.value = "";

    radio_1[0].checked = false;
    radio_1[1].checked = false;
  } else if (number == 2) {
    var row_1 = page.children[0];
    var row_2 = page.children[1];

    var column_1_1 = row_1.children[0].children[1];
    var column_1_2 = row_1.children[1].children[1];
    var column_2_1 = row_2.children[0].children[1];
    var select_1 = row_2.children[1].children[1].children[0];
    var img_1 = row_2.children[1].children[1].children[2]

    column_1_1.value = "";
    column_1_2.value = "";
    column_2_1.value = "";

    for (var i = 0; i < select_1.options.length; i++) {
      if (select_1.options[i].text === "0") {
        select_1.selectedIndex = i;
        break;
      }
    }

    img_1.setAttribute("src", "Operational/kick.png")
    
  } else if(number == 3){
    var row_1 = page.children[0];
    var row_2 = page.children[1];

    var select_1 = row_1.children[0].children[1].children[0];
    var column_1_2 = row_1.children[1].children[1];
    var column_1_3 = row_1.children[2].children[1];
    var column_2_1 = row_2.children[0].children[1];

    column_1_2.value = "";
    column_1_3.value = "";
    column_2_1.value = "";


    for (var i = 0; i < select_1.options.length; i++) {
      if (select_1.options[i].text === "Kick Off") {
        select_1.selectedIndex = i;
        break;
      }
    }
  }
};
