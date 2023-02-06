const crud_button = document.getElementsByClassName("crud_button")[0]

crud_button.addEventListener("click",(e)=>{
    let pai2 = e.target.parentNode.parentNode
    let pai3 = e.target.parentNode.parentNode.parentNode
    var button = pai2
    if(button.getAttribute("number") < 1){
        alert("Selecione Algo")
        return;
    }
    var header = pai3.children[0]
    var crud_container = pai3.children[1]
    var number = crud_container.getAttribute("number");

    var view = pai3.children[2].children[0]
    var crud = pai3.children[2].children[1]
    var form = crud.children[number-1]

    header.style.pointerEvents = "none"
    crud_container.style.display = "none"
    view.style.display = "none"
    
    form.style.display = "flex"
    if(number === "1"){
        form.action = "/forms/CreateConfigVersion"
    }else if(number === "2"){
        form.action = "/forms/CreateConfigOper"
    }else if(number === "3"){
        form.action = "/forms/CreateConfigTask"
    }
})