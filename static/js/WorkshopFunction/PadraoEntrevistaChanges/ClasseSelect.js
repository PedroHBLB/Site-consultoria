const selectClasse = document.getElementsByName("IDCLASS")[0];

selectClasse.addEventListener("change", (e) => {
  let pai3 = e.target.parentNode.parentNode.parentNode
  let select = e.target.value;
  let selectObj = pai3.children[1].children[1].children[0];
  let squareObj = pai3.children[1].children[1].children[1];

  if (select === "Objetivo de Negócio") {
    selectObj.className = "config_select";
    squareObj.style.display = "block";
  } else {
    selectObj.className = "select_ghost";
    squareObj.style.display = "none";
    selectObj.value = "Não Aplica";
  }
});
