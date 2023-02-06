export { EventScheduleButton }
const papel = document.getElementsByClassName("papelName")[0]

var EventScheduleButton =(scheduleScrollbar)=>{
    let ButtonsSchedule = scheduleScrollbar.children
    for (var i = 0; i < ButtonsSchedule.length; i++) {
        scheduleScrollbar.children[i].addEventListener("click", (e) => {
          let pai2 = e.target.parentNode.parentNode
          let button = e.target;
          let atributos = e.target.children[6].textContent.split(";");
          let form = pai2.children[1]

          for (var j = 0; j < scheduleScrollbar.children.length; j++) {
            var button_temp = scheduleScrollbar.children[j]
            button_temp.style.boxShadow = "0px 0px 0px 0px white";
          }
          button.style.boxShadow = "0px 0px 1px 10px lightgray";
          
    
          let row = pai2.children[1].children[0];
          let column_1 = row.children[0].children[1];
          let column_2 = row.children[1].children[1];
          let column_3 = row.children[2].children[1];
          let column_4 = row.children[3].children[1];
          let column_5 = row.children[4].children[1];
    
          column_1.value = atributos[0];
          column_2.value = atributos[1];
          column_3.value = atributos[2];
          column_4.value = atributos[3];
          if(atributos[4] == "0"){
            column_5.value = "Não Iniciado"
          }else if(atributos[4] == "1"){
            column_5.value = "Iniciado"
          }else if(atributos[4] == "2"){
            column_5.value = "Encerrado"
          }
          form.setAttribute("color", button.style.borderColor);
    
          let ghost_color = form.children[0].children[5];
          ghost_color.value = form.getAttribute("color"); 
          let ghost_idtarefa = form.children[0].children[6];
          ghost_idtarefa.value = atributos[5];
          let ghost_idoper = form.children[0].children[7];
          ghost_idoper.value = atributos[6];
          let ghost_idsch = form.children[0].children[8];
          ghost_idsch.value = atributos[7];
          let task_button = form.children[1];
          if(atributos[4] == "1"){
            task_button.value = "Continuar Tarefa"
            task_button.style.pointerEvents = "auto";
          }
          else if(atributos[4] == "2"){
            task_button.value = "Revisar Tarefa"
            if(papel.textContent == "Consultor" || papel.textContent == "Líder/Encarregado de Equipe (Consultoria)"){
              task_button.style.pointerEvents = "auto";
            }else{
              task_button.style.pointerEvents = "none";
            }
          }else{
            task_button.value = "Iniciar Tarefa"
            task_button.style.pointerEvents = "auto";
          }

        });
      }
}