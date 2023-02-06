const plusButton = document.getElementsByClassName("analise_plus_button");

for(var i = 0; i < plusButton.length; i++){
    plusButton[i].addEventListener("click", (e)=>{
        console.log("analise 3")
        let pai1 = e.target.parentNode
        let pai2 = e.target.parentNode.parentNode
        let valor = pai1.children[0].value;
        let blocks = pai2
        if(valor != ""){
            for(var l = 1; l < blocks.children.length-1; l++){
                if(blocks.children[l].getAttribute("visivel") === "true"){
                    let buttonAnalise = document.createElement("div")
                    let divAnalise = document.createElement("textarea")
                    let buttonRemove = document.createElement("button")
                    buttonAnalise.className = "analise_button"
                    buttonRemove.className = "analise_button_remove"
                    divAnalise.textContent = valor
                    buttonRemove.textContent = "X"
                    divAnalise.className = "divAnalise"
                    blocks.children[l].appendChild(buttonAnalise)
                    buttonAnalise.appendChild(divAnalise)
                    buttonAnalise.appendChild(buttonRemove)

                    buttonRemove.addEventListener("click", (e)=>{
                        let pai1 = e.target.parentNode
                        let pai2 = e.target.parentNode.parentNode
                        let div = pai2
                        let button = pai1
                        div.removeChild(button)
                    })
                }
            }
        }else{
            alert("Escreva algum valor")
        }
    })
}