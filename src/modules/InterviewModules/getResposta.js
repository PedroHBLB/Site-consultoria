import { crudPlusBSC } from "./crudPlusBSC.js";

export { getResposta }

let getResposta = (entrevista, resposta, tipoentrada)=>{
    if(tipoentrada === '1'){
        let textarea = entrevista.children[0];
        textarea.value = resposta;
    }else if(tipoentrada === '2'){
        if(resposta === "Sim / Maior / verdadeiro"){
            entrevista.children[0].children[0].checked = true
        }else{
            entrevista.children[1].children[0].checked = true
        }
    }else if(tipoentrada === '3'){
        let resp = resposta.split(";")
        let textoSlider = entrevista.children[1]
        let slider = entrevista.children[2]
        textoSlider.innerHTML = resp[0]
        slider.setAttribute("value", resp[1])
    }else if(tipoentrada === '4'){
        let resp = resposta.split(";")
        let containerButton = entrevista.children[1];
        let select = entrevista.children[0].children[0].children[0]
        if(resp[0] == ""){
            return;
        }
        select.setAttribute("num",resp.length)
        select.value = resp.length + " Itens"

        for(var j=0; j < resp.length;j++){
            let button = document.createElement("button")
            let name = document.createElement("p")
            let X = document.createElement("p")
            
            button.className += "exercice_combo_button";
            name.className += "button_text_pass"
            X.className += "ghost"
                
            containerButton.appendChild(button);
            button.appendChild(name);
            button.appendChild(X);
            
            name.textContent = resp[j]
            X.textContent = "X"
            button.onmouseover = (e) =>{
                e.target.style.background = "#3278c4"
                e.target.children[1].className = "button_text_pass"
            }
        
            button.onmouseout = (e) =>{
                e.target.style.background = "white"
                e.target.children[1].className = "ghost"
            }
        
            button.addEventListener("click", (e)=>{
                e.target.parentNode.removeChild(e.target)
                let num = select.getAttribute("num")
                num = parseInt(num) - 1
                select.value = num + " Itens"
                select.setAttribute("num", num)
            })
        }
    }else if(tipoentrada === '5'){
        /*"Import Files*/
    }else if(tipoentrada === '9'){
        /*"Solution*/
    }else if(tipoentrada === '10'){
        let resp = resposta.split(";")
        let containerButton = entrevista.children[1];
        let select = entrevista.children[0].children[0].children[0]
        if(resp[0] == ""){
            return;
        }
        select.setAttribute("num",resp.length)
        select.value = resp.length + " Itens"
        for(var j=0; j < resp.length;j++){
            let button = document.createElement("button")
            let name = document.createElement("p")
            let X = document.createElement("p")
            
            button.className += "exercice_combo_button";
            name.className += "button_text_pass"
            X.className += "ghost"
                
            containerButton.appendChild(button);
            button.appendChild(name);
            button.appendChild(X);
            
            name.textContent = resp[j]
            X.textContent = "X"
            button.onmouseover = (e) =>{
                e.target.style.background = "#3278c4"
                e.target.children[1].className = "button_text_pass"
            }
        
            button.onmouseout = (e) =>{
                e.target.style.background = "white"
                e.target.children[1].className = "ghost"
            }
        
            button.addEventListener("click", (e)=>{
                e.target.parentNode.removeChild(e.target)
                let num = select.getAttribute("num")
                num = parseInt(num) - 1
                select.value = num + " Itens"
                select.setAttribute("num", num)
            })
        }
    }else if(tipoentrada === '11'){
        let resp = resposta.split(";")
        let radioContainer = entrevista.children[0].children[1];
        let MRUnidContainer = entrevista.children[1]
        let barrierRow = entrevista.children[2].children[0].children[1]
        let selectBarrirer = entrevista.children[3]
        let selectCause = entrevista.children[4]
        let controler = entrevista.children[5]

        for(var j = 0; j < radioContainer.children.length;j++){
            if(radioContainer.children[j].value === resp[0]){
                radioContainer.children[j].checked = true
            }
        }
        MRUnidContainer.children[0].children[1].value = resp[1]
        MRUnidContainer.children[1].children[1].value = resp[2]
        MRUnidContainer.children[2].children[1].value = resp[3]
        barrierRow.value = resp[4]
        selectBarrirer.children[0].children[1].children[0].value = resp[5]
        selectBarrirer.children[1].children[1].children[0].value = resp[6]
        selectCause.children[0].children[1].children[0].value = resp[7]
        selectCause.children[1].children[1].children[0].value = resp[8]
        controler.children[0].children[1].value = resp[9]
        controler.children[1].children[1].children[0].value = resp[10]
    }else if(tipoentrada == '12'){
        let ContainerButton = entrevista.children[1]
        let crud = entrevista.children[0].children[0]
        resposta = resposta.split('?')
        if(resposta != ""){
            for(var i = 0; i < resposta.length; i++){
                let respostaTemp = resposta[i].split(';')
                crudPlusBSC(crud, ContainerButton, resposta[i], respostaTemp[4], respostaTemp[5], respostaTemp[2], false)
            }
        }
    }else if(tipoentrada == '13'){
        let lista = resposta.split(";")
        for(var i = 0; i < entrevista.children.length; i++){
            for(var j = 0; j < entrevista.children[i].children.length; j++){
                let blocoTema = entrevista.children[i].children[j]
                for(var l = 0; l < lista.length; l++){
                    if(lista[l] == blocoTema.children[1].textContent){
                        let num = parseInt(entrevista.getAttribute("cont"))
                        blocoTema.children[0].checked = true;
                        blocoTema.children[1].style.color = "#1684ff"
                        entrevista.setAttribute("cont", num+1)
                    }
                }
            }
        }
    }

}