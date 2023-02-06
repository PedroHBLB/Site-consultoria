var colorOper = (oper_button)=>{
    for (var i = 0; i < oper_button.length; i++) {
    
        oper_button[i].onmouseover = function (e) {
          var temp_oper_button = e.target;
          temp_oper_button.style.background = "lightgray";
        };
        
        oper_button[i].onmouseout = function (e) {
          var temp_oper_button = e.target;
          if(temp_oper_button.style.pointerEvents === "auto"){
            temp_oper_button.style.background = "white";
          }
          else{
            temp_oper_button.style.background = "lightgray";
          }
        };
      }
}

export { colorOper }