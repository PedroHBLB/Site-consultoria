export { OpersCompany };

var OpersCompany = (buttonCompanu, oper) => {
  let operNum = buttonCompanu.getAttribute("idoper")
  oper.style.pointerEvents = "auto"
  for(var i = 0; i < oper.children.length;i++){
    if(operNum === oper.children[i].getAttribute("id")){
        oper.children[i].style.pointerEvents = "none"
        oper.children[i].style.background = "lightgray"
    }
  }
  return operNum

};
