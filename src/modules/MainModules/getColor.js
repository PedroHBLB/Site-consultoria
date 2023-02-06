export {getColor}
var getColor = (operID, oper)=>{
    for(var i = 0; i < oper.children.length; i++){
        if(oper.children[i].getAttribute("id") == operID){
            return oper.children[i].getAttribute("color")
        }
    }
}