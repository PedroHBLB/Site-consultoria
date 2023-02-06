const DeleteButton = document.getElementsByClassName("bsc_type_delete");

for (var i = 0; i < DeleteButton.length; i++) {
  DeleteButton[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    if (pai2.getAttribute("num") != "-1") {
      let resposta = pai2.getAttribute("resposta");
      let perspectiva = pai2.getAttribute("BSCtipo");
      let numperspectiva = pai2.getAttribute("numperspectiva");
      let entrevistaContent = pai5;
      let acceptButton = entrevistaContent.children[2].children[3].children[0];
      entrevistaContent.children[0].style.display = "none";
      entrevistaContent.children[1].style.display = "none";
      entrevistaContent.children[2].style.display = "flex";
      entrevistaContent.style.height = "30em";

      entrevistaContent.children[2].setAttribute("BSCtipo", perspectiva);
      entrevistaContent.children[2].setAttribute("numperspectiva", numperspectiva);
      acceptButton.setAttribute("mode", "delete");
      acceptButton.setAttribute("type", "bsc");

      let resp = resposta.split(";");

      let meta = entrevistaContent.children[2].children[0].children[0].children[1];
      let real = entrevistaContent.children[2].children[0].children[1].children[1];
      let indicador = entrevistaContent.children[2].children[1].children[0].children[1].children[0];
      let textarea = entrevistaContent.children[2].children[2].children[0];

      for(var j = 0; j < indicador.children.length;j++){
        if(indicador.children[j].getAttribute("tipo") === perspectiva){
            indicador.children[j].style.display = "flex";
        }else{
            indicador.children[j].style.display = "none";
        }
      } 

      meta.value = resp[0];
      real.value = resp[1];
      indicador.value = resp[2];
      textarea.value = resp[3];

      entrevistaContent.children[2].style.pointerEvents = "none";
    } else {
      alert("Selecione um bsc");
    }
  });
}