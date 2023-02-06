export { setResposta }

let setResposta = (tipoentrada, resposta, e)=>{
    let pai2,pai3 = "";
    if(e.target != undefined){
        pai2 = e.target.parentNode.parentNode
        pai3 =  e.target.parentNode.parentNode.parentNode 
    }
    if(tipoentrada === '1'){
        let textarea = pai2.children[1].children[0]
        resposta = textarea.value;
    }else if(tipoentrada === '2'){
        let radio = ''
        if(pai2.children[1].children[0].children[0].checked){
            radio = "Sim / Maior / verdadeiro";
        }else{
            radio = "Não / Menor / Falso";
        }
        resposta = radio
    }else if(tipoentrada === '3'){
        let textoSlider = pai2.children[1].children[1].textContent
        let valor = pai2.children[1].children[2].value
        resposta = textoSlider+";"+valor
    }else if(tipoentrada === '4'){
        let buttonContainer = pai2.children[1].children[1];
        for(var j = 0; j<buttonContainer.children.length;j++){
            let size = buttonContainer.children[j].textContent.length-1
            if(j+1 === buttonContainer.children.length){
                resposta += buttonContainer.children[j].textContent.substring(0,size)
            }else{
                resposta += buttonContainer.children[j].textContent.substring(0,size)+";"
            }
        }
    }else if(tipoentrada === '5'){
        /*Import Files*/
    }else if(tipoentrada === '9'){
        /*"Solution*/
    }else if(tipoentrada === '10'){
        let buttonContainer = pai2.children[1].children[1];
        for(var j = 0; j<buttonContainer.children.length;j++){
            let size = buttonContainer.children[j].textContent.length-1
            if(j+1 === buttonContainer.children.length){
                resposta += buttonContainer.children[j].textContent.substring(0,size)
            }else{
                resposta += buttonContainer.children[j].textContent.substring(0,size)+";"
            }         
        }
    }else if(tipoentrada === '11'){
        let content = e
        let radioContainer = content.children[0].children[1];
        let MRUnidContainer = content.children[1]
        let barrierRow = content.children[2].children[0].children[1]
        let selectBarrirer = content.children[3]
        let selectCause = content.children[4]
        let controler = content.children[5]

        resposta = "";
        for(var j = 0; j < radioContainer.children.length;j++){
            if(radioContainer.children[j].checked){
                resposta += radioContainer.children[j].value+"!"
            }
        }
        resposta +=";"
        resposta += MRUnidContainer.children[0].children[1].value+";"
        resposta += MRUnidContainer.children[1].children[1].value+";"
        resposta += MRUnidContainer.children[2].children[1].value+";"
        resposta += barrierRow.value+";"
        resposta += selectBarrirer.children[0].children[1].children[0].value+";"
        resposta += selectBarrirer.children[1].children[1].children[0].value.split("-")[0]+";"
        resposta += selectCause.children[0].children[1].children[0].value+";"
        resposta += selectCause.children[1].children[1].children[0].value.split("-")[0]+";"
        resposta += controler.children[0].children[1].value+";"
        resposta += controler.children[1].children[1].children[0].value.split("-")[0]+"";
    }else if(tipoentrada == '11.3'){
        let buttonContainer = e 
        for(var j = 0; j < buttonContainer.children.length;j++){
            resposta += buttonContainer.children[j].getAttribute("resposta")+"?"
        }
    }    else if(tipoentrada == '11.5'){
        let buttonContainer = pai2.children[1].children[1]
        for(var j = 0; j < buttonContainer.children.length;j++){
            resposta += buttonContainer.children[j].getAttribute("resposta")+"?"
        }
    }else if(tipoentrada == '12'){
        let content = e
        let meta = content.children[0].children[0].children[1]
        let real = content.children[0].children[1].children[1]
        let indicador = content.children[1].children[0].children[1].children[0]
        let textarea = content.children[2].children[0]

        resposta = ""
        resposta += meta.value+";"
        resposta += real.value+";"
        resposta += indicador.value+";"
        resposta += textarea.value
    }else if(tipoentrada == '12.5'){
        let buttonContainer = pai2.children[1].children[1]
        for(var j = 0; j < buttonContainer.children.length;j++){
            resposta += buttonContainer.children[j].getAttribute("resposta")+"?"
        }
        resposta = resposta.substring(0, resposta.length-1)
    }else if(tipoentrada == '13'){
        let container = pai3.children[1].children[1]
        resposta = ""
        for(var i = 0; i < container.children.length; i++){
            for(var j = 0; j < container.children[i].children.length; j++){
                let blocoTema = container.children[i].children[j]
                if(blocoTema.children[0].checked ){
                    resposta += blocoTema.children[1].textContent+";";
                }
            }
        }
        resposta = resposta.substring(0, resposta.length-1)
    }else if(tipoentrada == '14'){
        let container = pai2.children[1];
        resposta = ""
        resposta = container.children[1].value+";"
        for(var i = 3; i <= 9; i+=2){
            resposta += container.children[i].children[1].children[0].value.trim()+";"
        }
        for(var i = 12; i < container.children.length; i+=1){
            for(var j = 0; j < container.children[i].children.length; j+=1){
                if(container.children[i].children[j].children[0].checked){
                    resposta += "1"
                }else{
                    resposta += "0"
                }
                if(i+1 != container.children.length || j+1 != container.children[i].children.length){
                    resposta += ";"
                }
            }
        }
    }
    return resposta;
}