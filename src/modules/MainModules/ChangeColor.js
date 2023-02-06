export { ChangeColor }

var ChangeColor = (scheduleScrollbar, color)=>{
    scheduleScrollbar.style.border = "2px solid " + color;
    for(var i = 0; i < scheduleScrollbar.children.length;i++){
        scheduleScrollbar.children[i].style.border = "2px solid " + color
        scheduleScrollbar.children[i].children[3].style.border = "2px solid " + color
        scheduleScrollbar.children[i].children[5].style.border = "2px solid " + color
    }
}