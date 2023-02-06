const radioInput = document.getElementsByName("FLGINOUT")[0]
const radioOutput = document.getElementsByName("FLGINOUT")[1]

radioInput.addEventListener("click", (e)=>{
    let pai3 = e.target.parentNode.parentNode.parentNode
    let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    let selectInput = pai3.children[1].children[1].children[0]

    let first = true
    for(var i = 0;i<selectInput.options.length;i++){
        if(selectInput.options[i].getAttribute("flginout") === "true"){
            selectInput.options[i].style.display = "none"
        }else{
            selectInput.options[i].style.display = "block" 
            if(first){
                selectInput.value = selectInput.options[i].value
                first = false
            }
        }
    }

    let rowRadio = pai6.children[1].children[0]

    rowRadio.style.pointerEvents = "auto"    

    let selectCombo = pai6.children[1].children[1].children[0].children[1].children[0]
    let selectEscala = pai6.children[1].children[1].children[1].children[1].children[0]
    let squareCombo = pai6.children[1].children[1].children[0].children[1].children[1]
    let squareEscala = pai6.children[1].children[1].children[1].children[1].children[1]

    selectCombo.className = "select_ghost"
    selectEscala.className = "select_ghost"
    squareCombo.style.display = "none"
    squareEscala.style.display = "none"
    selectCombo.value = "Não Aplica"
    selectEscala.value = "Não Aplica"

    let blockGroup = pai6.children[1].children[2].children[1]

    blockGroup.style.pointerEvents = "auto"

    let img = pai6.children[1].children[1].children[2].children[0]

    img.style.pointerEvents = "none"
    
})

radioOutput.addEventListener("click", (e)=>{
    let pai3 = e.target.parentNode.parentNode.parentNode
    let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    let selectOutput = pai3.children[1].children[1].children[0]

    let first = true
    for(var i = 0;i<selectOutput.options.length;i++){
        if(selectOutput.options[i].getAttribute("flginout") === "true"){
            selectOutput.options[i].style.display = "block"
            if(first){
                selectOutput.value = selectOutput.options[i].value
                first = false
            }
        }else{
            selectOutput.options[i].style.display = "none" 
        }
    }

    let rowRadio = pai6.children[1].children[0]

    rowRadio.style.pointerEvents = "none"
    let radioMeta = document.getElementsByName("FLAGMETA")
    let radioObj = document.getElementsByName("FLAGOBJETIVO")
    let radioReal = document.getElementsByName("FLAGREAL")
    
    radioMeta[0].checked = true
    radioMeta[1].checked = false
    radioObj[0].checked = true
    radioObj[1].checked = false
    radioReal[0].checked = true
    radioReal[1].checked = false

    let selectCombo = pai6.children[1].children[1].children[0].children[1].children[0]
    let selectEscala = pai6.children[1].children[1].children[1].children[1].children[0]
    let squareCombo = pai6.children[1].children[1].children[0].children[1].children[1]
    let squareEscala = pai6.children[1].children[1].children[1].children[1].children[1]

    selectCombo.className = "select_ghost"
    selectEscala.className = "select_ghost"
    squareCombo.style.display = "none"
    squareEscala.style.display = "none"
    selectCombo.value = "Não Aplica"
    selectEscala.value = "Não Aplica"

    let blockGroup = pai6.children[1].children[2].children[1]
    let radioGroup = document.getElementsByName("GRUPO")

    blockGroup.style.pointerEvents = "none"
    radioGroup[0].checked = true
    radioGroup[1].checked = false

    let img = pai6.children[1].children[1].children[2].children[0]

    img.style.pointerEvents = "auto"
})