export { crudDeleteInd };

var crudDeleteInd = (containerContent, buttonsContainer, crud)=>{
    let numindicador = containerContent.getAttribute("numindicador");
      for (var j = 0; j < buttonsContainer.children.length; j++) {
        let numindicadorButton = buttonsContainer.children[j].getAttribute("numindicador");
        if (numindicador == numindicadorButton) {
          buttonsContainer.removeChild(buttonsContainer.children[j]);
          crud.setAttribute("resposta", "");
          crud.setAttribute("num", "-1");
        }
      }
      containerContent.style.pointerEvents = "auto";
}
