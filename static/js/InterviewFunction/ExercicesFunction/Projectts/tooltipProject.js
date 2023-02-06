const button = document.getElementsByClassName("projeto_padrao_button")

for(var i = 0; i <button.length; i++){
    button[i].onmouseover = function(e){
        console.log("project")
        let pai1 = e.target.parentNode
        let pai3 = e.target.parentNode.parentNode.parentNode

        let textButton = pai1.children[1].textContent
        let textAtual = pai3.children[1].children[0].value
        pai3.children[1].children[2].textContent = textAtual
        pai3.children[1].children[0].value = textButton
    }

    button[i].addEventListener("click", (e)=>{
        let pai3 = e.target.parentNode.parentNode.parentNode
        let textNovo = pai3.children[1].children[0].value
        pai3.children[1].children[2].textContent = textNovo
    })

    button[i].onmouseout = function(e){
        let pai3 = e.target.parentNode.parentNode.parentNode
        let textAntigo = pai3.children[1].children[2].textContent
        pai3.children[1].children[0].value = textAntigo
    }
}