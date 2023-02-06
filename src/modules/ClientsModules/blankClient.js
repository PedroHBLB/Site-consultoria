export { blankClient };

var blankClient = (page) => {
  var row_1 = page.children[0];
  var row_2 = page.children[1];
  var row_3 = page.children[2];
  var row_4 = page.children[3];
  var row_5 = page.children[4];

  var column_1_1 = row_1.children[0].children[1];
  var column_1_2 = row_1.children[1].children[1];
  var column_1_3 = row_1.children[2].children[1];
  var column_2_1 = row_2.children[0].children[1];
  var column_2_2 = row_2.children[1].children[1];
  var column_2_3 = row_2.children[2].children[1];
  var column_3_1 = row_3.children[0].children[1];
  var column_3_2 = row_3.children[1].children[1];
  var column_3_3 = row_3.children[2].children[1];
  let column_5_3 = row_5.children[2].children[1];
  var select_1 = row_4.children[0].children[1].children[0];
  var select_2 = row_4.children[1].children[1].children[0];
  var select_3 = row_5.children[0].children[1].children[0];
  var radio_1 = document.getElementsByName("YesNo");

  column_1_1.value = "";
  column_1_2.value = "";
  column_1_3.value = "";
  column_2_1.value = "";
  column_2_2.value = "";
  column_2_3.value = "";
  column_3_1.value = "";
  column_3_2.value = "";
  column_3_3.value = "";
  column_5_3.value = "";

  for (var i = 0; i < select_1.options.length; i++) {
    if (select_1.options[i].text === "Microempresa") {
      select_1.selectedIndex = i;
      break;
    }
  }

  for (var i = 0; i < select_2.options.length; i++) {
    if (select_2.options[i].text === "Alimentos") {
      select_2.selectedIndex = i;
      break;
    }
  }

  for (var i = 0; i < select_3.options.length; i++) {
    if (select_3.options[i].text === "SPI INTEGRAÇÃO DE SISTEMAS LTDA") {
      select_3.selectedIndex = i;
      break;
    }
  }

  radio_1[0].checked = false;
  radio_1[1].checked = false;
};
