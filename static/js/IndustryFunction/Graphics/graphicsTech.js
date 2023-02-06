const graphics = document.getElementsByClassName('tech_top')
const valoresText = document.getElementsByClassName("tech")[0].textContent.split(",")
const QuadradosCores = document.getElementsByClassName("tech_square")

let year = document.getElementsByClassName("year")[0].textContent.split(",")
let valores = []
let dados = []
let cores = []

for(var i = 0; i < valoresText.length; i+=12){
    let temp = []
    for(var j = 0; j < 12;j++){
        temp[j] = valoresText[i+j]
    }
    valores.push(temp)
}

for(var i = 0; i < year.length; i++){
    year[i] = parseInt(year[i])-2021
}

for(var i = 0; i < year.length; i++){
    let temp = [year[i],0,0,0,0,0,0,0,0,0,0,0]
    for(var j = 0; j < valores.length; j++){
        if(year[i] == valores[j][11]){
            for(var l = 0; l < 11; l++){
                if(valores[j][l] == 1){
                    temp[l+1] = temp[l+1] + 1
                }
            }
        }
    }
    dados.push(temp)
}

for(var i = 0; i < QuadradosCores.length; i++){
    cores.push(QuadradosCores[i].style.backgroundColor)
}

let sizeTotal = 65


for(var i = 0; i < graphics.length; i++){
    for(var j = 0; j < dados.length; j++){
        if(graphics[i].getAttribute("number") == dados[j][0]){
            let cont = 0
            for(var l = 1; l < dados[j].length; l++){
                cont += dados[j][l]
            }
            for(var l = 0; l < cores.length; l++){
                if(dados[j][l+1]>0){
                    let div = document.createElement("div")
                    let sizeDiv = String((dados[j][l+1]/cont)*sizeTotal)
                    div.style.width = "8.7em"
                    div.style.height = sizeDiv+"vh"
                    div.style.backgroundColor = cores[l]
                    div.style.display = "flex"
                    div.style.alignItems = "center"
                    div.style.justifyContent = "center"
                    div.style.borderTop = "3px solid black"
                    div.style.borderRight = "3px solid black"
                    div.style.borderLeft = "3px solid black"
                    let text = document.createElement("p")
                    text.textContent = String((dados[j][l+1]/cont)*100)+"%"
                    text.style.fontWeight = "bold"
                    graphics[i].appendChild(div)
                    div.appendChild(text)
                }
            }   
        }
    }
}
