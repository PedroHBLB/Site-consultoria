const checkboxs = document.getElementsByClassName("analise_checked");

for (var i = 0; i < checkboxs.length; i++) {
  checkboxs[i].addEventListener("change", (e) => {
    let pai3 = e.target.parentNode.parentNode.parentNode
    let bool = e.target.checked;
    let mode = e.target.getAttribute("modo");
    let blocks = pai3.children[2];
    let select = pai3.children[2].children[0].children[0];
    let input = pai3.children[2].children[7];
    for (var j = 0; j < select.length - 1; j++) {
      if (select.children[j].getAttribute("modo") == mode) {
        if (bool) {
          select.children[j].style.display = "flex";
          select.children[j].setAttribute("visivel", "true");
          input.style.pointerEvents = "auto";
          select.children[6].style.display = "none";
          select.children[6].setAttribute("visivel", "false");
        } else {
          select.children[j].style.display = "none";
          select.children[j].setAttribute("visivel", "false");
        }
      }
    }
    for (var j = 0; j < select.length - 1; j++) {
      if (select.children[j].getAttribute("visivel") == "true") {
        select.value = select.children[j].value;
        for (var l = 1; l < blocks.children.length - 1; l++) {
          if (
            blocks.children[l].getAttribute("modo") ===
            select.children[j].getAttribute("modo")
          ) {
            blocks.children[l].style.display = "flex";
            blocks.children[l].setAttribute("visivel", "true");
          } else {
            blocks.children[l].style.display = "none";
            blocks.children[l].setAttribute("visivel", "false");
          }
        }
        break;
      }
    }
    let zero = true;
    for (var j = 0; j < select.length - 1; j++) {
      if (select.children[j].getAttribute("visivel") == "true") {
        zero = false;
      }
    }
    if (zero) {
      select.value = select.children[6].value;
      select.children[6].style.display = "flex";
      select.children[6].setAttribute("visivel", "true");
      input.style.pointerEvents = "none";
      for (var l = 1; l < blocks.children.length - 1; l++) {
        blocks.children[l].style.display = "none";
        blocks.children[l].setAttribute("visivel", "false");
      }
    }
  });
}
