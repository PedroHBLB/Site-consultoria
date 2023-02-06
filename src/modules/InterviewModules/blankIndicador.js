export { blankIndicador };

var blankIndicador = (containerIndicador) => {
  let radioContainer = containerIndicador.children[0].children[1];
  let MRUnidContainer = containerIndicador.children[1];
  let barrierRow = containerIndicador.children[2].children[0].children[1];
  let selectBarrirer = containerIndicador.children[3];
  let selectCause = containerIndicador.children[4];
  let controler = containerIndicador.children[5];

  for (var j = 0; j < radioContainer.children.length; j++) {
    radioContainer.children[j].checked = false;
  }
  MRUnidContainer.children[0].children[1].value = "";
  MRUnidContainer.children[1].children[1].value = "";
  MRUnidContainer.children[2].children[1].value = "";
  barrierRow.value = "";
  selectBarrirer.children[0].children[1].children[0].value = "Desperdicio";
  selectBarrirer.children[1].children[1].children[0].value = selectBarrirer.children[1].children[1].children[0].children[0].textContent;
  selectCause.children[0].children[1].children[0].value = "Máquina";
  selectCause.children[1].children[1].children[0].value = selectCause.children[1].children[1].children[0].children[0].textContent;
  controler.children[0].children[1].value = "";
  controler.children[1].children[1].children[0].value = controler.children[1].children[1].children[0].children[0].textContent;
};
