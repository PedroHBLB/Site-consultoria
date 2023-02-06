const removeButton = document.getElementsByClassName("analise_button_remove")

for(var i = 0; i < removeButton.length; i++){
    removeButton[i].addEventListener("click", (e)=>{

        let div = e.target.parentNode.parentNode
        let button = e.target.parentNode
        div.removeChild(button)
    })
}