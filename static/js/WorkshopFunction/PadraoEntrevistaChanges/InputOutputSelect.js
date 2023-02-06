const selectInput = document.getElementsByName("IDTIPOENTRADA")[0];

selectInput.addEventListener("change", (e) => {
  let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
  let select = e.target.value;
  let selectCombo =
    pai6.children[1].children[1].children[0].children[1].children[0];
  let selectEscala =
    pai6.children[1].children[1].children[1].children[1].children[0];
  let squareCombo =
    pai6.children[1].children[1].children[0].children[1].children[1];
  let squareEscala =
    pai6.children[1].children[1].children[1].children[1].children[1];
  let rowRadio = pai6.children[1].children[0];
  let rowGroup = pai6.children[1].children[2].children[1];
  let img = pai6.children[1].children[1].children[2].children[0];
  if (select === "COMBOBOX") {
    selectCombo.className = "config_select";
    selectEscala.className = "select_ghost";
    squareCombo.style.display = "block";
    squareEscala.style.display = "auto";
    selectCombo.value = selectCombo.options[1].value;
    selectEscala.value = "Não Aplica";
    rowRadio.style.pointerEvents = "auto";
    rowGroup.style.pointerEvents = "auto";
  } else if (select === "RANGESLIDER") {
    selectCombo.className = "select_ghost";
    selectEscala.className = "config_select";
    squareCombo.style.display = "none";
    squareEscala.style.display = "block";
    selectCombo.value = "Não Aplica";
    selectEscala.value = selectEscala.options[1].value;
    rowRadio.style.pointerEvents = "auto";
    rowGroup.style.pointerEvents = "auto";
  } else if (select === "INDICADORES" || select === "BSC") {
    selectCombo.className = "select_ghost";
    selectEscala.className = "select_ghost";
    squareCombo.style.display = "none";
    squareEscala.style.display = "none";
    selectCombo.value = "Não Aplica";
    selectEscala.value = "Não Aplica";
    rowRadio.style.pointerEvents = "none";
    rowRadio.children[0].children[1].children[0].checked = true;
    rowRadio.children[1].children[1].children[0].checked = true;
    rowRadio.children[2].children[1].children[0].checked = true;
  } else if (select === "TEMAS") {
    selectCombo.className = "select_ghost";
    selectEscala.className = "select_ghost";
    squareCombo.style.display = "none";
    squareEscala.style.display = "none";
    selectCombo.value = "Não Aplica";
    selectEscala.value = "Não Aplica";
    rowRadio.style.pointerEvents = "none";
    rowRadio.children[0].children[1].children[0].checked = true;
    rowRadio.children[1].children[1].children[0].checked = true;
    rowRadio.children[2].children[1].children[0].checked = true;
    rowGroup.style.pointerEvents = "none";
    rowGroup.children[1].children[0].checked = true;
  } else if (select === "PROJETOS") {
    selectCombo.className = "select_ghost";
    selectEscala.className = "select_ghost";
    squareCombo.style.display = "none";
    squareEscala.style.display = "none";
    selectCombo.value = "Não Aplica";
    selectEscala.value = "Não Aplica";
    rowRadio.style.pointerEvents = "none";
    rowRadio.children[0].children[1].children[0].checked = true;
    rowRadio.children[1].children[1].children[0].checked = true;
    rowRadio.children[2].children[1].children[0].checked = true;
    rowGroup.style.pointerEvents = "none";
    rowGroup.children[1].children[0].checked = true;
  } else {
    selectCombo.className = "select_ghost";
    selectEscala.className = "select_ghost";
    squareCombo.style.display = "none";
    squareEscala.style.display = "none";
    selectCombo.value = "Não Aplica";
    selectEscala.value = "Não Aplica";
    if (
      select != "SHOW FILE" &&
      select != "SHOW CONSULTING" &&
      select != "MANUAL ACTIVITY"
    ) {
      rowRadio.style.pointerEvents = "auto";
      rowGroup.style.pointerEvents = "auto";
    }
  }

  if (select === "SHOW FILE" || select === "SHOW CONSULTING") {
    img.style.pointerEvents = "auto";
  } else {
    img.style.pointerEvents = "none";
  }
});
