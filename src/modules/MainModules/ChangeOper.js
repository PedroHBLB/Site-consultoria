export { ChangeOper }

var ChangeOper = (operContainer, button)=>{
    for(var i=0;i<operContainer.children.length;i++){
        operContainer.children[i].style.background = "white";
        operContainer.children[i].style.pointerEvents = "auto";
    }
    button.style.background = "lightgray";
    button.style.pointerEvents = "none";
}