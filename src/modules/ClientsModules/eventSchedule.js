export { eventSchedule }
var eventSchedule = (scrollbar, id)=>{
    for (var i = 0; i < scrollbar.children.length; i++) {
        scrollbar.children[i].addEventListener("click", (e) => {
          for (var j = 0; j < scrollbar.children.length; j++) {
            var button_temp = document.getElementsByClassName("schedule_button")[j];
            button_temp.style.boxShadow = "0px 0px 0px 0px white";
          }
      
          e.target.style.boxShadow = "0px 0px 1px 10px lightgray";
      
          let page = document.getElementsByClassName("ConCli_info_container")[2];
          let atributos_temp = e.target.children[9].textContent.split(";");
          var row_1 = page.children[0];
          var row_2 = page.children[1];
          var row_3 = page.children[2];
      
          var select_1 = row_1.children[0].children[1].children[0];
          var select_2 = row_1.children[1].children[1].children[0];
          var column_2_1 = row_2.children[0].children[1];
          var column_2_2 = row_2.children[1].children[1];
          var column_2_3 = row_2.children[2].children[1];
          var select_3 = row_3.children[0].children[1].children[0];
      
          column_2_1.value = atributos_temp[3];
          column_2_2.value = atributos_temp[4];
          column_2_3.value = atributos_temp[5];
          id.value = atributos_temp[0];
      
          select_1.value = atributos_temp[1]
          select_2.value = atributos_temp[2]
        
          if(atributos_temp[6] == "0"){
            select_3.value = "Não Iniciado"
          }else if(atributos_temp[6] == "1"){
            select_3.value = "Iniciado"
          }else if(atributos_temp[6] == "2"){
            select_3.value = "Encerrado"
          }
           
        });
      }
}