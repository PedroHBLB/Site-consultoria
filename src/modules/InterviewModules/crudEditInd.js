export { crudEditInd };

var crudEditInd = (containerContent,buttonsContainer,crud,indicador,barreira,resposta, idrespen) => {
  let numindicador = containerContent.getAttribute("numindicador"); 
  resposta += ";" + indicador + ";" + numindicador + ";" + idrespen;

  for (var j = 0; j < buttonsContainer.children.length; j++) {
    let numindicadorButton =  buttonsContainer.children[j].getAttribute("numindicador");
    if (numindicador == numindicadorButton) {
      buttonsContainer.children[j].setAttribute("resposta", resposta);
      buttonsContainer.children[j].children[1].children[0].textContent = barreira;
      crud.setAttribute("resposta", resposta);
    }
  }
};
