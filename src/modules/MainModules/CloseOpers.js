export { CloseOpers }

var CloseOpers = (buttonCompnay, oper)=>{
    let operNum = buttonCompnay.getAttribute("idoper")
    oper.style.pointerEvents = "none"
    for(var i = 0; i < oper.children.length;i++){
        if(operNum === oper.children[i].getAttribute("id")){
            oper.children[i].style.background = "white"
        }
    }
}