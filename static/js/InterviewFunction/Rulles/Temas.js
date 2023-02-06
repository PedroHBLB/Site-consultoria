import { temaShow } from "/modules/InterviewModules/temaShow.js";

const temaRespostas = document.getElementsByClassName("temaRespostas")
const temaContainer = document.getElementsByClassName("temaRespostasContainer")

let cont = 0

for( var i = 0; i < temaRespostas.length; i++){
    let lista = temaRespostas[i].textContent.split("9")
    for(var j = 0; j < lista.length; j++){
        temaContainer[cont].children[0].textContent = lista[j]
        let temaContent = temaContainer[cont].children[1].children[0]
        temaContent.setAttribute("num", 1)
        let leftButton = document.createElement("button")
        let leftIcon = document.createElement("i")
        let rightButton = document.createElement("button")
        let rightIcon = document.createElement("i")
        leftButton.appendChild(leftIcon)
        leftButton.className = "temas_button_pass tema_left"
        leftIcon.className = "fa-solid fa-chevron-left crud_icon"
        rightButton.appendChild(rightIcon)
        rightButton.className =  "temas_button_pass tema_right"
        rightIcon.className = "fa-solid fa-chevron-right crud_icon"
        temaContent.appendChild(leftButton)
        if("Machine Learning" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_ML1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "MachineLearning", listaFiles[l], cont)
                cont += 1
            }
        }else if("Internet of Things (IoT)" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_IOT1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "IoT", listaFiles[l], cont)
                cont += 1
            }
        }else if("Robotização" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_ROBOTIZACAO1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "Robotizacao", listaFiles[l], cont)
                cont += 1
            }
        }else if("Realidade Estendida (3D, RA, RV, xR)" === lista[j]){
            let cont = 1;
            let listaFiles = []
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "RealidadeEstendida", listaFiles[l], cont)
                cont += 1
            }
        }else if("Simulação Digital e Gêmeos Digitais" === lista[j]){
            let cont = 1;
            let listaFiles = []
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "Digital", listaFiles[l], cont)
                cont += 1
            }
        }else if("Robotic Process Automation (RPA)" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_RPA1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "RPA", listaFiles[l], cont)
                cont += 1
            }
        }else if("Cloud Computing" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_CLOUD1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "Cloud", listaFiles[l], cont)
                cont += 1
            }
        }else if("Sistema de Visão" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_SISTEMAS_DE_VISAO1.pdf", "embed"],["CATCHUP_SISTEMAS_DE_VISAO2.pdf", "embed"],["CATCHUP_SISTEMAS_DE_VISAO3.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "SistemaVisao", listaFiles[l], cont)
                cont += 1
            }
        }else if("Advanced Planning and Scheduling (APS)" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_APS1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "APS", listaFiles[l], cont)
                cont += 1
            }
        }else if("Manufacturing Execution System" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_MES1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "MES", listaFiles[l], cont)
                cont += 1
            }
        }else if("Cybersecurity" === lista[j]){
            let cont = 1;
            let listaFiles = [["CATCHUP_CYBERSECURITY1.pdf", "embed"]]
            for(var l = 0; l < listaFiles.length; l++){
                temaShow(temaContent, "Cybersecurity" ,listaFiles[l], cont)
                cont += 1
            }
        }
        temaContent.appendChild(rightButton)
        cont++
    }
}

const leftButton = document.getElementsByClassName("tema_left");
const rightButton = document.getElementsByClassName("tema_right");

for(var i = 0; i < leftButton.length; i++){
    leftButton[i].addEventListener("click", e =>{
        let container = e.target.parentNode
        let maior = container.children.length-2
        let numAtual = parseInt(container.getAttribute("num"))
        if(numAtual - 1 == 0){
            numAtual = maior
        }else{
            numAtual -= 1
        }
        container.setAttribute("num", numAtual)
        for(var j = 1; j < container.children.length-1; j++){
            if(numAtual == container.children[j].getAttribute("num")){
                container.children[j].style.display = "flex"
            }else{
                container.children[j].style.display = "none"
            }
        }

    })
}

for(var i = 0; i < rightButton.length; i++){
    rightButton[i].addEventListener("click", e =>{
        let container = e.target.parentNode
        let maior = container.children.length-2
        let numAtual = parseInt(container.getAttribute("num"))
        if(numAtual + 1 == maior+1){
            numAtual = 1
        }else{
            numAtual += 1
        }
        container.setAttribute("num", numAtual)

        for(var j = 1; j < container.children.length-1; j++){
            if(numAtual == container.children[j].getAttribute("num")){
                container.children[j].style.display = "flex"
            }else{
                container.children[j].style.display = "none"
            }
        }

    })
}


