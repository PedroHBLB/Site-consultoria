export {colorNav}

var colorNav = (navs)=>{
    for (var i = 0; i < navs.length; i++) {
        navs[i].onmouseover = function (e) {
          var temp_button = e.target;
          temp_button.style.color = "white";
          temp_button.style.background = "#1684ff";
        };
        
        navs[i].onmouseout = function (e) {
          var temp_button = e.target;
          if(temp_button.style.pointerEvents === "auto"){
            temp_button.style.color = "#1684ff";
            temp_button.style.background = "white";
          }
          else{
            temp_button.style.color = "white";
            temp_button.style.background = "gray";
          }
        };
      }
}