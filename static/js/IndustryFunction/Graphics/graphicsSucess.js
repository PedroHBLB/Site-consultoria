const divGraphics = document.getElementsByClassName("sucess_pre_bot_container")[0]
const sucessLista = document.getElementsByClassName("sucessLista")[0].textContent
let sucessListaTemp = sucessLista.split("!")

let indicadores = []
let meta = []
let real = []
let obj = []

for(var i = 0; i < sucessListaTemp.length;i+=5){
    let key = true
    if(key && sucessListaTemp[i+4] == 11){
    indicadores.push(sucessListaTemp[i])
        if(sucessListaTemp[i+1] != "undefined"){
            meta.push(sucessListaTemp[i+1])
        }else{
        meta.push(0)
        }
        if(sucessListaTemp[i+2] != "undefined"){
            real.push(sucessListaTemp[i+2])
        }else{
            real.push(0)
        }
        if(sucessListaTemp[i+3] != "undefined"){
            obj.push(sucessListaTemp[i+3])
        }else{
           obj.push(0)
        }
    }
}

for(var i = 0; i <  indicadores.length; i+=5){
    let container = document.createElement("div") 
    container.className = "sucess_bot_container"
     if(i == 0){
        container.style.display = "flex"
    }else{
        container.style.display = "none"
    }
    divGraphics.appendChild(container)
    for(var j = 0; j <  5; j++){
        if(indicadores[i+j] != undefined){
            let graphic = document.createElement("div")
            let graphicTop = document.createElement("div")
            let graphicBot = document.createElement("div")
            graphic.className = "sucess_graphics"
            graphicTop.className = "sucess_top_graphics"
            graphicBot.className = "sucess_bot_graphics"
            container.appendChild(graphic)
            graphic.appendChild(graphicTop)
            graphic.appendChild(graphicBot)
            let model1 = document.createElement("div")
            let model2 = document.createElement("div")
            let model3 = document.createElement("div")
            model1.className = "sucess_column"
            model2.className = "sucess_column"
            model3.className = "sucess_column"
            let text1 = document.createElement("p")
            let text2 = document.createElement("p")
            let text3 = document.createElement("p") 
            let bar1 = document.createElement("div")
            let bar2 = document.createElement("div")
            let bar3 = document.createElement("div")
            text1.className = "sucess_graphics_tex"
            text2.className = "sucess_graphics_tex"
            text3.className = "sucess_graphics_tex"
            bar1.className = "sucess_graphics_bar"
            bar2.className = "sucess_graphics_bar"
            bar3.className = "sucess_graphics_bar"
            graphicTop.appendChild(model1)
            graphicTop.appendChild(model2)
            graphicTop.appendChild(model3)
            model1.appendChild(text1)
            model2.appendChild(text2)
            model3.appendChild(text3)    
            model1.appendChild(bar1)
            model2.appendChild(bar2)
            model3.appendChild(bar3)
            let porcent1 = String((50*meta[i+j])/100)
            let porcent2 = String((50*real[i+j])/100)
            let porcent3 = String((50*obj[i+j])/100)
            let texto1 = String(meta[i+j]).trim()
            let texto2 = String(real[i+j]).trim()
            let texto3 = String(obj[i+j]).trim()
            bar1.style.height = String(porcent1)+"vh"
            bar1.style.backgroundColor = "rgb(0, 0, 128)"
            bar2.style.height = String(porcent2)+"vh"
            bar2.style.backgroundColor = "rgb(0, 255, 255)"
            bar3.style.height = String(porcent3)+"vh"
            bar3.style.backgroundColor = "rgb(51, 153, 255)"
            let textBot = document.createElement("p")
            textBot.style.fontSize = "15px"
            textBot.textContent = indicadores[i+j]  
            graphicBot.appendChild(textBot)
            text1.textContent = texto1+"%" 
            text2.textContent = texto2+"%" 
            text3.textContent = texto3+"%"        
        }
    }
}


