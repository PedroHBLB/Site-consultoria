export { CreateScheduleButton }

var CreateScheduleButton = (buttonCompany, scheduleScrollbar, schedule )=>{
    let IDcompany = buttonCompany.getAttribute("company_id") 
    let IDoper = buttonCompany.getAttribute("idoper") 
    let tempSchedule = []
    for (var i = 0; i < schedule.length - 1; i++) {
        if (schedule[i][0] === IDoper && schedule[i][6] == IDcompany){
            tempSchedule.push(schedule[i])
        }
    }

    for (var i = 0; i < tempSchedule.length; i++) {
        let aux = ""
        let dataI = tempSchedule[i][2].split("/");
        for (var j = i; j < tempSchedule.length; j++) {
            let dataJ = tempSchedule[j][2].split("/");
            if(parseInt(dataI[2]) > parseInt(dataJ[2])){
                aux = tempSchedule[j]
                tempSchedule[j] = tempSchedule[i]
                tempSchedule[i] = aux
            }else if(parseInt(dataI[2]) == parseInt(dataJ[2])){
                if(parseInt(dataI[1]) > parseInt(dataJ[1])){
                    aux = tempSchedule[j]
                    tempSchedule[j] = tempSchedule[i]
                    tempSchedule[i] = aux
                }else if(parseInt(dataI[1]) == parseInt(dataJ[1])){
                    if(parseInt(dataI[0]) > parseInt(dataJ[0])){
                        aux = tempSchedule[j]
                        tempSchedule[j] = tempSchedule[i]
                        tempSchedule[i] = aux
                    }
                }
            }
        }
    }

    for (var i = 0; i < tempSchedule.length; i++) {
        if (tempSchedule[i][0] === IDoper && tempSchedule[i][6] == IDcompany){
            let button = document.createElement("button");
            let titulo = document.createElement("h1");
            let br = document.createElement("br");
            let textoPT = document.createElement("p");
            let dataPT = document.createElement("label");
            let textoTR = document.createElement("p");
            let dataTR = document.createElement("label");
            let atributos = document.createElement("p");

            button.className += "all_button scroll_button main_schedule_button";
            titulo.className += "button_title_2";

            textoPT.className += "button_text";
            dataPT.className += "button_label button_label_color_change";
            textoTR.className += "button_text";
            dataTR.className += "button_label button_label_color_change";
            atributos.className += "ghost scheduleInfo";

         
    
            
            scheduleScrollbar.appendChild(button);
            button.appendChild(titulo);
            button.appendChild(br);
            button.appendChild(textoPT);
            button.appendChild(dataPT);
            button.appendChild(textoTR);
            button.appendChild(dataTR);
            button.appendChild(atributos);

            
            titulo.textContent = tempSchedule[i][1];
            textoPT.textContent = "Data Prevista";
            dataPT.textContent = tempSchedule[i][2];
            textoTR.textContent = "Data de Termino Real ";
            dataTR.textContent = tempSchedule[i][4];
            atributos.textContent =
                tempSchedule[i][1] +
                ";" +
                tempSchedule[i][2] +
                ";" +
                tempSchedule[i][3] +
                ";" +
                tempSchedule[i][4] +
                ";" +
                tempSchedule[i][5] +
                ";" +
                tempSchedule[i][7] +
                ";" +
                tempSchedule[i][0] +
                ";" +
                tempSchedule[i][8];
    
            
        }
    }
    if(scheduleScrollbar.children.length === 0){
        scheduleScrollbar.style.display = "none"
    }else{
        scheduleScrollbar.style.display = "flex"
    }
}