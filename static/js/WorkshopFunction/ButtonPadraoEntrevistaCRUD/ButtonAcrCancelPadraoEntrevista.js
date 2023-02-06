const acrButton = document.getElementsByClassName("ACR_button")[3]
const selectEntrada = document.getElementsByName("IDTIPOENTRADA")[0]

acrButton.addEventListener("click", (e)=>{
    let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
    let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    const header = pai6.children[0];
    const operTask = pai6.children[2].children[0];
    const activities = pai6.children[2].children[1];
    const form = pai4
    const acr = form.children[0].children[2];

    header.style.pointerEvents = "auto";
    operTask.style.pointerEvents = "auto";
    form.children[0].style.pointerEvents = "auto"
    activities.style.display = "flex";
    form.style.display = "none";
    acr.style.display = "none";
    for(var i = 0; i < selectEntrada.children.length;i++){
        selectEntrada.children[i].style.display = "block"
    }
})