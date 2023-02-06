const version_button = document.getElementsByClassName(
  "config_object_button"
)[0];
const buttonVersions = document.getElementsByClassName("version_button");
const versionID = document.getElementsByClassName("version_id")[0];

for (var i = 0; i < buttonVersions.length; i++) {
  buttonVersions[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let button = e.target;
    let historico = pai2.children[2].children[0].children[1];
    let data = pai2.children[2].children[1].children[1];
    let status = pai2.children[2].children[2].children[1];

    let atributos = button.children[3].textContent.split(";");

    historico.textContent = atributos[0];
    data.textContent = atributos[1];
    status.textContent = atributos[2];
    versionID.value = atributos[3];

    const button_temp = document.getElementsByClassName("version_button");
    for (var j = 0; j < button_temp.length; j++) {
      button_temp[j].style.boxShadow = "0px 0px 0px 0px white";
    }

    button.style.boxShadow = "0px 0px 1px 10px lightgray";
    version_button.setAttribute("num", 1);
  });
}
