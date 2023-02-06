const selects = document.getElementsByClassName("select_analise");

for (var i = 0; i < selects.length; i++) {
  selects[i].addEventListener("change", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let valor = e.target.value.toLowerCase();
    if (valor === "mão de obra") {
      valor = "pessoas";
    } else if (valor === "material") {
      valor = "equipamentos";
    } else if (valor === "método") {
      valor = "processo";
    } else if (valor === "medição") {
      valor = "monitoramento";
    } else if (valor === "máquina") {
      valor = "tecnologia";
    } else if (valor === "meio ambiente") {
      valor = "industria";
    }
    let blocks = pai2;
    for (var l = 1; l < blocks.children.length - 1; l++) {
      if (blocks.children[l].getAttribute("modo") === valor) {
        blocks.children[l].style.display = "flex";
        blocks.children[l].setAttribute("visivel", "true");
      } else {
        blocks.children[l].style.display = "none";
        blocks.children[l].setAttribute("visivel", "false");
      }
    }
  });
}
