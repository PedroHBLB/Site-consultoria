const oper_button = document.getElementsByClassName("oper_button");
const operatiol_button = document.getElementsByClassName(
  "config_object_button"
)[1];
const operID = document.getElementsByClassName("oper_id")[0];

for (var i = 0; i < oper_button.length; i++) {
  oper_button[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let button = e.target;
    let step = pai2.children[2].children[0].children[1];
    let details = pai2.children[2].children[1].children[1];
    let icon = pai2.children[2].children[2].children[1];

    let atributos = button.children[3].innerHTML.split(";");

    step.textContent = atributos[0];
    details.textContent = atributos[1];
    icon.setAttribute("src", atributos[2]);
    operID.value = atributos[5];

    let button_temp = document.getElementsByClassName("oper_button");
    for (var j = 0; j < button_temp.length; j++) {
      button_temp[j].style.boxShadow = "0px 0px 0px 0px white";
    }
    button.style.boxShadow = "0px 0px 1px 10px lightgray";
    operatiol_button.setAttribute("num", 0);
  });
}
