const crud_plus = document.getElementsByClassName("crud_button")[0];

crud_plus.addEventListener("click", (e)=>{
    let pai2 = e.target.parentNode.parentNode
    let pai3 = e.target.parentNode.parentNode.parentNode
    const crud = pai2
    const header = pai3.children[0]
    const operTask = pai3.children[2].children[0]
    const activitie = pai3.children[2].children[1]
    const form = pai3.children[2].children[2]
    const acr = form.children[0].children[3]
    header.style.pointerEvents = "none"
    operTask.style.pointerEvents = "none"
    crud.style.display = "none"
    activitie.style.display = "none"
    form.style.display = "flex"
    acr.style.display = "flex"
    
    const selectOper = operTask.children[1].children[0].children[1].children[0]
    const selectTask = operTask.children[1].children[1].children[1].children[0]
    let numOper = selectOper.options.selectedIndex
    let numTask = selectTask.options.selectedIndex
    let idoper = selectOper.options[numOper].getAttribute("idoper")
    let idtarefa = selectTask.options[numTask].getAttribute("idtarefa")
    let inputOper = form.children[0].children[2].children[1]
    let inputtarefa = form.children[0].children[2].children[2]
    inputOper.value = idoper
    inputtarefa.value = idtarefa

    const page = form.children[0];

    const row_1 = page.children[0];
    const row_2 = page.children[1];
    const row_3 = page.children[2];

    const column_1_1 = row_1.children[0].children[1];
    const column_1_2 = row_1.children[1].children[1];
    var select_1 = row_2.children[0].children[1].children[0];
    let radio_1 = document.getElementsByName("INCLUIREGISTRO");
    let radio_2 = document.getElementsByName("INDIVIDGRUPO");
    const column_3_1 = row_3.children[0].children[1];

    column_1_1.value = "";
    column_1_2.value = "";
    column_3_1.value = "";

    select_1.value = "Administrador/Manutenção"

    radio_1[0].checked = false;
    radio_1[1].checked = false;
    radio_2[0].checked = false;
    radio_2[1].checked = false;
    
    form.children[0].action = "/forms/CreateWorkshopActvities"
})