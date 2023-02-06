const acrButton = document.getElementsByClassName("ACR_button")[1]

acrButton.addEventListener("click", (e)=>{
    let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    const header = pai6.children[0];
    const operTask = pai6.children[2].children[0];
    const activities = pai6.children[2].children[1];
    const form = pai6.children[2].children[2];
    const acr = form.children[0].children[3];
    header.style.pointerEvents = "auto";
    operTask.style.pointerEvents = "auto";
    form.style.pointerEvents = "auto";
    activities.style.display = "flex";
    form.style.display = "none";
    acr.style.display = "none";
})