const text = document.getElementsByClassName("indicadoresBarrier");
const select = document.getElementsByClassName("barrier_select")

for(var i = 0; i < text.length; i++){
    let indicadores = text[i].textContent.split(";")[1].split(',');
    if(indicadores[0] != ""){
        for(var j = 0; j < indicadores.length; j++){
            let options = document.createElement("option");
            options.text = indicadores[j]
            options.value = indicadores[j]
            select[i].appendChild(options)
        }
    }


}

