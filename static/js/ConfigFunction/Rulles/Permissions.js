const permiValores = document  .getElementsByClassName("permi_valores")[0]
const inputs = document.getElementsByClassName("permission_input");

if (permiValores != undefined) {
  let permiValoresTexto = permiValores.textContent.split(",");
  let cont = 0;

  for (var i = 0; i < permiValoresTexto.length; i++) {
    if (i % 4 == 0) {
      let aux = permiValoresTexto[i];
      permiValoresTexto[i] = permiValoresTexto[i + 1];
      permiValoresTexto[i + 1] = aux;
    }
  }

  for (var i = 0; i < inputs.length; i += 3) {
    if (permiValoresTexto[cont] == 1) {
      inputs[i].checked = true;
      inputs[i + 1].checked = true;
      inputs[i + 2].checked = true;
    } else if (permiValoresTexto[cont] == 2) {
      inputs[i].checked = true;
      inputs[i + 1].checked = false;
      inputs[i + 2].checked = true;
    } else if (permiValoresTexto[cont] == 3) {
      inputs[i].checked = false;
      inputs[i + 1].checked = true;
      inputs[i + 2].checked = true;
    } else if (permiValoresTexto[cont] == 4) {
      inputs[i].checked = true;
      inputs[i + 1].checked = true;
      inputs[i + 2].checked = false;
    } else if (permiValoresTexto[cont] == 5) {
      inputs[i].checked = true;
      inputs[i + 1].checked = false;
      inputs[i + 2].checked = false;
    } else if (permiValoresTexto[cont] == 6) {
      inputs[i].checked = false;
      inputs[i + 1].checked = false;
      inputs[i + 2].checked = true;
    } else if (permiValoresTexto[cont] == 7) {
      inputs[i].checked = false;
      inputs[i + 1].checked = true;
      inputs[i + 2].checked = false;
    } else if (permiValoresTexto[cont] == 8) {
      inputs[i].checked = false;
      inputs[i + 1].checked = false;
      inputs[i + 2].checked = false;
    }
    cont++;
  }
}
