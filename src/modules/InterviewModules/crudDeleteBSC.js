export {crudDeleteBSC}

var crudDeleteBSC = (containerContent, buttonsContainer, crud)=>{
    let numperspectiva = containerContent.getAttribute("numperspectiva");
    
    for (var j = 0; j < buttonsContainer.children.length; j++) {
        let numindicadorButton = buttonsContainer.children[j].getAttribute("numperspectiva");
        if (numperspectiva == numindicadorButton) {
          buttonsContainer.removeChild(buttonsContainer.children[j]);
          crud.setAttribute("resposta", "");
          crud.setAttribute("num", "-1");
        }
    }
    containerContent.style.pointerEvents = "auto";
}