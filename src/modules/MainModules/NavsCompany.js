export { NavsCompany }

var NavsCompany = (nav)=>{
    for(var i =0; i < nav.children.length;i++){
        if(i==0){
            nav.children[i].style.color = "white";
            nav.children[i].style.background = "gray";
            nav.children[i].pointerEvents = "none"
        }else{
            nav.children[i].style.color = "#1684ff";
            nav.children[i].style.background = "white";
            nav.children[i].style.pointerEvents = "auto"
        }
    }
}