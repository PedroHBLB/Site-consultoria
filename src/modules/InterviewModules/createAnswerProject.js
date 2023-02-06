export {createAnswerProject}

var createAnswerProject = (SendContainer,json, cont) => {
    if(json.MODE === "config"){
        let del = json.RESPOSTA.split(";")[1]
        let key = true;
        for(var i = 2; i < SendContainer.length; i++){
            if(SendContainer[i].getAttribute("mode") === "config" && SendContainer[i].getAttribute("idProjeto") === json.IDPROJETO){
                SendContainer[i].value = JSON.stringify(json)
                key = false;
                break;
            }
        }
        if(key){
            let input = document.createElement("input");
            input.value = JSON.stringify(json);
            input.className += "ghost";
            input.name += "RESPOSTA_PROJECT_" + cont;
            input.setAttribute("idProjeto", json.IDPROJETO);    
            input.setAttribute("type", json.TYPE);
            input.setAttribute("mode", json.MODE);
            SendContainer.appendChild(input);
        }

        if(del === "true"){
            for (var i = SendContainer.length - 1; i > 0; i--) {
                if(SendContainer[i].getAttribute("mode") != "config" && SendContainer[i].getAttribute("idProjeto") === json.IDPROJETO){
                    SendContainer.removeChild(SendContainer[i]);
                }
            }
        }
        
    }else{
        let key = true;
        for(var i = 2; i < SendContainer.length; i++){
            if(SendContainer[i].getAttribute("mode") === json.MODE && SendContainer[i].getAttribute("idProjeto") === json.IDPROJETO){
                SendContainer[i].value = JSON.stringify(json)
                key = false;
                break;
            }
        }
        if(key){
            let input = document.createElement("input");
            input.value = JSON.stringify(json);
            input.className += "ghost";
            input.name += "RESPOSTA_PROJECT_" + cont;
            input.setAttribute("idProjeto", json.IDPROJETO);    
            input.setAttribute("type", json.TYPE);
            input.setAttribute("mode", json.MODE);
            SendContainer.appendChild(input);
        }
    }
}