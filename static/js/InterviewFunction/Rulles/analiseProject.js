const selects = document.getElementsByClassName("select_analise");
const checkboxs = document.getElementsByClassName("analise_checked");
const block = document.getElementsByClassName("analise_block");
const inputContainer = document.getElementsByClassName("analise_plus_container");

for (var s = 0; s < selects.length; s++) {
  let first = true;
  let none = true;
  for (var c = s * 6; c < (s + 1) * 6; c++) {
    if (!checkboxs[c].checked) {
      selects[s].children[0].children[c % 6].style.display = "none";
      selects[s].children[0].children[c % 6].setAttribute("visivel", "false");
    } else {
      if (first) {
        first = false;
        none = false;
        block[c].style.display = "flex";
        block[c].setAttribute("visivel", "true");
        selects[s].children[0].value = selects[s].children[0].children[c % 6].value
        selects[s].children[0].children[6]
        selects[s].children[0].children[6].style.display = "none"
        selects[s].children[0].children[6].setAttribute("visivel","false"); 
      }
    }
  }
  if (none) {
    selects[s].children[0].value = selects[s].children[0].children[6].value;
    inputContainer[s].style.pointerEvents = "none";
  }
}
