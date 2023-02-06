export { setRespostaProject }

let setRespostaProject = (tipo,resposta, e)=>{
    let pai2 = e.target.parentNode.parentNode
    if(tipo === "config"){
        resposta = ""
        resposta+= pai2.children[1].children[0].children[1].value+";"
        resposta+= pai2.children[1].children[0].children[5].checked
    }else if(tipo === "analise"){
        resposta = ""
        for(var i = 1; i < 7; i++){
            if(i == 1){
                resposta += pai2.children[1].children[0].children[0].children[0].checked
            }else if(i == 2){
                resposta += "!"+pai2.children[1].children[0].children[1].children[0].checked
            }else if(i == 3){
                resposta += "!"+pai2.children[1].children[0].children[2].children[0].checked

            }else if(i == 4){
                resposta += "!"+pai2.children[1].children[1].children[0].children[0].checked
            }else if(i == 5){
                resposta += "!"+pai2.children[1].children[1].children[1].children[0].checked
            }else if(i == 6){
                resposta += "!"+pai2.children[1].children[1].children[2].children[0].checked
            }
            let div = pai2.children[1].children[2].children[i]
            for(var j = 0; j < div.children.length; j++){
                resposta += ";"+div.children[j].children[0].value
            }
            
        }
    }else{
        resposta=""
        resposta+=pai2.children[1].children[0].children[1].children[0].value
    }
    return resposta;
}