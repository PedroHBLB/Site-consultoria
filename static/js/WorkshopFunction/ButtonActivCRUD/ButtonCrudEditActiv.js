const crud_edit = document.getElementsByClassName("crud_button")[1];

crud_edit.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  if (parseInt(pai2.getAttribute("number")) > 0) {
    const crud = pai2;
    const header = pai3.children[0];
    const operTask = pai3.children[2].children[0];
    const activities = pai3.children[2].children[1];
    const form = pai3.children[2].children[2];
    const acr = form.children[0].children[3];
    header.style.pointerEvents = "none";
    operTask.style.pointerEvents = "none";
    crud.style.display = "none";
    activities.style.display = "none";
    form.style.display = "flex";
    acr.style.display = "flex";


    const selectOper = operTask.children[1].children[0].children[1].children[0];
    const selectTask = operTask.children[1].children[1].children[1].children[0];
    let numOper = selectOper.options.selectedIndex;
    let numTask = selectTask.options.selectedIndex;
    let idoper = selectOper.options[numOper].getAttribute("idoper");
    let idtarefa = selectTask.options[numTask].getAttribute("idtarefa");
    let inputOper = form.children[0].children[2].children[1];
    let inputtarefa = form.children[0].children[2].children[2];
    let id = form.children[0].children[2].children[3];
    inputOper.value = idoper;
    inputtarefa.value = idtarefa;
    id.value = pai2.getAttribute("number")

    let atributos = "";
    for (var i = 0; i < activities.children[0].children.length; i++) {
      if (
        activities.children[0].children[i].children[0].getAttribute("ID") ==
        crud.getAttribute("number")
      ) {
        atributos =
          activities.children[0].children[i].children[3].textContent.split(";");
      }
    }

    const page = form.children[0];

    const row_1 = page.children[0];
    const row_3 = page.children[2];

    const column_1_1 = row_1.children[0].children[1];
    const column_1_2 = row_1.children[1].children[1];
    let radio_1 = document.getElementsByName("INCLUIREGISTRO");
    let radio_2 = document.getElementsByName("INDIVIDGRUPO");
    const column_3_1 = row_3.children[0].children[1];

    column_1_1.value = atributos[1];
    column_1_2.value = atributos[2];
    column_3_1.value = atributos[5];


    if(atributos[3] === "true"){
        radio_1[0].checked = true;
    }else{
        radio_1[1].checked = true;
    }

    if(atributos[4] === "true"){
        radio_2[1].checked = true;
    }else{
        radio_2[0].checked = true;
    }

    form.children[0].action = "/forms/EditWorkshopActvities";
  } else {
    alert("Escolha algo");
  }
});
