export { crudEditBSC };

var crudEditBSC = (containerContent,buttonsContainer,crud,BSCtipo,ind,resposta) => {
    let numperspectiva = containerContent.getAttribute("numperspectiva");
    resposta += ";" + BSCtipo + ";" + numperspectiva

    for (var j = 0; j < buttonsContainer.children.length; j++) {
        let numperspectivaButton = buttonsContainer.children[j].getAttribute("numperspectiva");
        if (numperspectiva == numperspectivaButton) {
          buttonsContainer.children[j].setAttribute("resposta", resposta);
          buttonsContainer.children[j].children[1].children[0].textContent = ind;
          crud.setAttribute("resposta", resposta);
        }
      }
};
