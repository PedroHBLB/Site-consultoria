const button_edit = document.getElementsByClassName("edit_padraoentrevista")
const id = document.getElementsByName("ID")[1]

for(var i =0;i<button_edit.length;i++){
    button_edit[i].addEventListener("click", (e) =>{
        let pai1 = e.target.parentNode
        let pai3 = e.target.parentNode.parentNode.parentNode
        let pai7 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if(pai1.getAttribute("num") != -1){
            let atributos = pai1.children[3].textContent.split(";")
            let header = pai7.children[0]
            let crud = pai7.children[1]
            let operTask = pai7.children[2].children[0]
            let activities = pai7.children[2].children[1]
            let padraentrevista = pai7.children[2].children[3]
            let form = padraentrevista.children[0]
            let acr = pai7.children[2].children[3].children[0].children[2]


            header.style.pointerEvents = "none"
            operTask.style.pointerEvents = "none"
            padraentrevista.style.display = "flex"
            activities.style.display = "none"
            crud.style.display = "none"
            acr.style.display = "flex"

            let radioInput = document.getElementsByName("FLGINOUT")
            let radioMeta = document.getElementsByName("FLAGMETA")
            let radioObj = document.getElementsByName("FLAGOBJETIVO")
            let radioReal = document.getElementsByName("FLAGREAL")
            let rowRadio = form.children[1].children[0]
            let selectInput = form.children[0].children[0].children[0].children[1].children[1].children[0]
            let selectClasse = form.children[0].children[0].children[1].children[0].children[1].children[0]
            let selectObj = form.children[0].children[0].children[1].children[1].children[1].children[0]
            let selectCombo = form.children[1].children[1].children[0].children[1].children[0]
            let selectEscala = form.children[1].children[1].children[1].children[1].children[0]
            let squareObj = form.children[0].children[0].children[1].children[1].children[1].children[1]
            let squareCombo = form.children[1].children[1].children[0].children[1].children[1]
            let squareEscala = form.children[1].children[1].children[1].children[1].children[1]
            let file = form.children[1].children[1].children[2]
            let textarea = form.children[0].children[1].children[1]
            let InputTextarea = form.children[0].children[1].children[2]
            let sequencia = form.children[1].children[2].children[0].children[1]
            let blockGroup = form.children[1].children[2].children[1]
            let radioGroup = document.getElementsByName("GRUPO")
            let idoper = pai3.getAttribute("idoper")
            let idtarefa = pai3.getAttribute("idtarefa")
            let idactiv = pai3.children[0].getAttribute("id")
            let idInput = form.children[1].children[2].children[3]
            let idoperInput = form.children[1].children[2].children[5]
            let idtarefaInput = form.children[1].children[2].children[6]
            let idactivInput = form.children[1].children[2].children[7]
            if(atributos[5] == "true"){
                radioInput[1].checked = true
                rowRadio.style.pointerEvents = "none"
                blockGroup.style.pointerEvents = "none"
            }else{
                radioInput[0].checked = true
                rowRadio.style.pointerEvents = "auto"
                blockGroup.style.pointerEvents = "auto"
            }
            if(atributos[7] == 'true'){
                radioMeta[1].checked = true
            }else{
                radioMeta[0].checked = true
            }
            if(atributos[9] == 'true'){
                radioObj[1].checked = true
            }else{
                radioObj[0].checked = true
            }
            if(atributos[8] == 'true'){
                radioReal[1].checked = true
            }else{
                radioReal[0].checked = true
            }
            
            for(var i = 0;i<selectInput.options.length;i++){
                if(selectInput.options[i].getAttribute("flginout") != atributos[5]){
                    selectInput.options[i].style.display = "none"
                }
            }
            selectInput.value = atributos[6]

            selectClasse.value = atributos[3]

            if(atributos[3] === "Objetivo de Negócio"){
                selectObj.className = "config_select"
                squareObj.style.display = "block"
                selectObj.value = atributos[4]
            }else{
                selectObj.className = "select_ghost"
                squareObj.style.display = "none"
                selectObj.value = atributos[4]
            }

            if(atributos[6] === "COMBOBOX"){
                selectCombo.className = "config_select"
                squareCombo.style.display = "block"
                selectCombo.value = atributos[10]
            }else{
                selectCombo.className = "select_ghost"
                squareCombo.style.display = "none"
                selectCombo.value = "Não Aplica"
            }

            if(atributos[6] === "RANGESLIDER"){
                selectEscala.className = "config_select"
                squareEscala.style.display = "block"
                selectEscala.value = atributos[12]
            }else{
                selectEscala.className = "select_ghost"
                squareEscala.style.display = "none"
                selectEscala.value = "Não Aplica"
            }
            
            if(atributos[11] === ''){
                file.children[0].value = ''
            file.children[2].textContent = 'Esperando Arquivo...'
            }else{
                file.children[0].value = atributos[13]
                file.children[2].textContent = atributos[13]
            }
            

            textarea.value = atributos[1] 
            InputTextarea.value = atributos[1] 
            sequencia.value = atributos[2]

            if(atributos[14] == 'true'){
                radioGroup[1].checked = true
            }else{
                radioGroup[0].checked = true
            }
            
            idInput = atributos[0]
            idoperInput.value = idoper
            idtarefaInput.value =idtarefa
            idactivInput.value =idactiv

            id.value = atributos[0]
            form.action = "/forms/EditWorkshopPadraoEntrevista"
        }else{
            alert("Selecione uma entrevista")
        }
        

    })
}