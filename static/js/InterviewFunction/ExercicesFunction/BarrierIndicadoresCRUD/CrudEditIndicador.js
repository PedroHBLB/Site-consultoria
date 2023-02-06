const EditButton = document.getElementsByClassName("barrir_type_edit");

for (var i = 0; i < EditButton.length; i++) {
  EditButton[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    if (pai2.getAttribute("num") != "-1") {
      let resposta = pai2.getAttribute("resposta");
      let indicador = pai2.getAttribute("indicador");
      let numindicador = pai2.getAttribute("numindicador");
      let entrevistaContent = pai5;
      let acceptButton = entrevistaContent.children[2].children[6].children[0];
      entrevistaContent.children[0].style.display = "none";
      entrevistaContent.children[1].style.display = "none";
      entrevistaContent.children[2].style.display = "flex";
      entrevistaContent.style.height = "45em";

      entrevistaContent.children[2].setAttribute("indicador", indicador);
      entrevistaContent.children[2].setAttribute("numindicador", numindicador);
      acceptButton.setAttribute("mode", "edit");
      acceptButton.setAttribute("type","barrier");

      let resp = resposta.split(";");
      let obj = resp[0].split("!");

      let radioContainer = entrevistaContent.children[2].children[0].children[1];
      let MRUnidContainer = entrevistaContent.children[2].children[1];
      let barrierRow = entrevistaContent.children[2].children[2].children[0].children[1];
      let selectBarrirer = entrevistaContent.children[2].children[3];
      let selectCause = entrevistaContent.children[2].children[4];
      let controler = entrevistaContent.children[2].children[5];

      for (var j = 0; j < radioContainer.children.length; j++) {
        for (var l = 0; l < obj.length; l++) {
            if(radioContainer.children[j].value == obj[l]){
                radioContainer.children[j].checked = true;  
            }
        }

      }
      MRUnidContainer.children[0].children[1].value = resp[1];
      MRUnidContainer.children[1].children[1].value = resp[2];
      MRUnidContainer.children[2].children[1].value = resp[3];
      barrierRow.value = resp[4];
      selectBarrirer.children[0].children[1].children[0].value = resp[5] ;
      selectBarrirer.children[1].children[1].children[0].value = selectBarrirer.children[1].children[1].children[0].children[resp[6]-1].value;
      selectCause.children[0].children[1].children[0].value = resp[7];
      selectCause.children[1].children[1].children[0].value = selectCause.children[1].children[1].children[0].children[resp[8]-1].value;
      controler.children[0].children[1].value = resp[9];
      controler.children[1].children[1].children[0].value = controler.children[1].children[1].children[0].children[resp[10]-1].value;
    } else {
      alert("Selecione um Indicador");
    }
  });
}
