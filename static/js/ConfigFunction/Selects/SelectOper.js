const oper_select = document.getElementsByClassName("oper_select")[0];
const img = document.getElementById("config_img");

oper_select.addEventListener("change", (e)=>{
    var imagens = {
        0:"Operational/kick.png",
        1:"Operational/align.png",
        2:"Operational/today.png",
        3:"Operational/diag.png",
        4:"Operational/recom.png",
        5:"Operational/action.png",
        6:"Operational/close.png",
    }
    img.setAttribute("src", imagens[oper_select.value])
})