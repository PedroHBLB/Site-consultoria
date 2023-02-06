export { eventsConsultant };

var eventsConsultant = (scrollbar, id) => {
  for (var i = 0; i < scrollbar.children.length; i++) {
    scrollbar.children[i].addEventListener("click", (e) => {
      for (var j = 0; j < scrollbar.children.length; j++) {
        var button_temp = document.getElementsByClassName("consultants_button")[j];
        button_temp.style.boxShadow = "0px 0px 0px 0px white";
      }

      e.target.style.boxShadow = "0px 0px 1px 10px lightgray";

      let consultants_page = document.getElementsByClassName("ConCli_info_container")[0];
      let atributos_temp = e.target.children[0].children[3].textContent.split(";");

      let row_1 = consultants_page.children[0];
      let row_2 = consultants_page.children[1];
      let row_3 = consultants_page.children[2];

      let column_1_1 = row_1.children[0].children[1];
      let column_1_2 = row_1.children[1].children[1];
      let column_2_1 = row_2.children[0].children[1];
      let column_2_2 = row_2.children[1].children[1];
      let select_1 = row_3.children[0].children[1].children[0];
      let select_2 = row_3.children[1].children[1].children[0];
      let radio_1 = document.getElementsByName("status_consultant");
      id.value = atributos_temp[7];

      column_1_1.value = atributos_temp[0];
      column_1_2.value = atributos_temp[1];
      column_2_1.value = atributos_temp[2];
      column_2_2.value = atributos_temp[3];

      for (var i = 0; i < select_1.options.length; i++) {
        if (select_1.options[i].text === atributos_temp[4]) {
          select_1.selectedIndex = i;
          break;
        }
      }

      for (var i = 0; i < select_2.options.length; i++) {
        if (select_2.options[i].text === atributos_temp[5]) {
          select_2.selectedIndex = i;
          break;
        }
      }

      if (atributos_temp[6] === "true") {
        radio_1[0].checked = true;
        radio_1[1].checked = false;
      } else {
        radio_1[0].checked = false;
        radio_1[1].checked = true;
      }
    });
  }
};
