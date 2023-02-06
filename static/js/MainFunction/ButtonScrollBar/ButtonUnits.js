const units_button = document.getElementsByClassName("first_units_button");

for (var i = 0; i < units_button.length; i++) {
  units_button[i].addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let pai3 = e.target.parentNode.parentNode.parentNode
    var button = e.target;
    var atributos = e.target.children[3].textContent.split(";");

    let scrollbutton = pai2;
    for (var j = 0; j < scrollbutton.children.length; j++) {
      scrollbutton.children[j].children[0].style.boxShadow = "none";
    }

    button.style.boxShadow = "0px 0px 1px 10px lightgray";

    var row_1 = pai3.children[1].children[0];
    var row_2 = pai3.children[1].children[1];
    var row_3 = pai3.children[1].children[2];

    var column_1_1 = row_1.children[0].children[1];
    var column_1_2 = row_1.children[1].children[1];
    var column_1_3 = row_1.children[2].children[1];
    var column_2_1 = row_2.children[0].children[1];
    var column_2_2 = row_2.children[1].children[1];
    var column_2_3 = row_2.children[2].children[1];
    var column_3_1 = row_3.children[0].children[1];
    var column_3_2 = row_3.children[1].children[1];
    var column_3_3 = row_3.children[2].children[1];

    column_1_1.innerText = atributos[0];
    column_1_2.innerText = atributos[1];
    column_1_3.innerText = atributos[2];
    column_2_1.innerText = atributos[3];
    column_2_2.innerText = atributos[4];
    column_2_3.innerText = atributos[5];
    column_3_1.innerText = atributos[6];
    column_3_2.innerText = atributos[7];
    column_3_3.innerText = atributos[8];
  });
}
