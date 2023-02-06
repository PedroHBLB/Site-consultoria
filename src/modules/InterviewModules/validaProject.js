export { validaProject }

let validaProject = (SendContainer, tipo, projectID)=>{
    if(tipo === "config"){
        return true;
    }else{
        for(var i = 2; i < SendContainer.length; i++){
            if(SendContainer[i].getAttribute("mode") === "config" && SendContainer[i].getAttribute("idProjeto") === projectID){
                let resp = JSON.parse(SendContainer[i].value)
                let del = resp.RESPOSTA.split(";")[1]
                if(del === "false"){
                    return true;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
}