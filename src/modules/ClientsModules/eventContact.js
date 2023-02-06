export { eventContact }
var eventContact = (scrollbar, id)=>{
    for (var i = 0; i < scrollbar.children.length; i++) {
        scrollbar.children[i].addEventListener("click", (e) => {
          for (var j = 0; j < scrollbar.children.length; j++) {
            let button_temp = document.getElementsByClassName("contacts_button")[j];
            button_temp.style.boxShadow = "0px 0px 0px 0px white";
          }
      
          e.target.style.boxShadow = "0px 0px 1px 10px lightgray";
      
          let page = document.getElementsByClassName("ConCli_info_container")[1];
          let atributos_temp = e.target.children[4].textContent.split(";");
      
          let row_1 = page.children[0];
          let row_2 = page.children[1];
          let row_3 = page.children[2];
      
          let column_1_1 = row_1.children[0].children[1];
          let column_1_2 = row_1.children[1].children[1];
          let column_2_1 = row_2.children[0].children[1];
          let column_2_2 = row_2.children[1].children[1];
          let select_1 = row_2.children[2].children[1].children[0];
          let select_2 = row_3.children[0].children[1].children[0];
          let select_3 = row_3.children[1].children[1].children[0];
          let select_4 = row_3.children[2].children[1].children[0];
      
          column_1_1.value = atributos_temp[0];
          column_1_2.value = atributos_temp[1];
          column_2_1.value = atributos_temp[2];
          column_2_2.value = atributos_temp[3];
          id.value = atributos_temp[8];
      
          select_1.value = atributos_temp[4]
          select_2.value = atributos_temp[5]
          select_3.value = atributos_temp[6]
          select_4.value = atributos_temp[7]
      
        });
      }
}