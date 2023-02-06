export {blankContact}
var blankContact = (page)=>{
    for (var j = 0; j < page.children[0].children.length; j++) {
        var button_temp = document.getElementsByClassName("contacts_button")[j];
        button_temp.style.boxShadow = "0px 0px 0px 0px white";
      }
  
      var row_1 = page.children[2].children[0];
      var row_2 = page.children[2].children[1];
      var row_3 = page.children[2].children[2];
  
      var column_1_1 = row_1.children[0].children[1];
      var column_1_2 = row_1.children[1].children[1];
      var column_2_1 = row_2.children[0].children[1];
      var column_2_2 = row_2.children[1].children[1];
      var select_1 = row_2.children[2].children[1].children[0];
      var select_2 = row_3.children[0].children[1].children[0];
      var select_3 = row_3.children[1].children[1].children[0];
      var select_4 = row_3.children[2].children[1].children[0];
  
      column_1_1.value = "";
      column_1_2.value = "";
      column_2_1.value = "";
      column_2_2.value = "";
  
      select_1.value = "Matriz"
      select_2.value = "Gestão"
      select_3.value = "Respondente"
      select_4.value = "pt-BR"
}