const containerBotao = document.getElementsByClassName("projeto_container_button")

for(var i = 0; i < containerBotao.length; i++){
    let button = containerBotao[i].children[0] 
    let span = containerBotao[i].children[1]
    
    button.textContent = span.textContent.substring(0,35)+"..."
}