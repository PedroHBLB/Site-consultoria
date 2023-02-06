const changeButtonContainer = document.getElementsByClassName("chagen_entrevista_container")

for(var i = 0; i < changeButtonContainer.length; i+=4){
    for(var j = 0; j < changeButtonContainer[i].children.length; j++){
        if(j === 0){
            changeButtonContainer[i].children[j].style.backgroundColor = "lightgray"
            changeButtonContainer[i].children[j].style.color = "#1684ff"
            changeButtonContainer[i].children[j].style.pointerEvents = "none"
            changeButtonContainer[i].children[j].setAttribute("num", j)
        }else{
            changeButtonContainer[i].children[j].setAttribute("num", j)
        }
    }
    for(var j = 0; j < changeButtonContainer[i+1].children.length; j++){
        if(j === 1){
            changeButtonContainer[i+1].children[j].style.backgroundColor = "lightgray"
            changeButtonContainer[i+1].children[j].style.color = "#1684ff"
            changeButtonContainer[i+1].children[j].style.pointerEvents = "none"
            changeButtonContainer[i+1].children[j].setAttribute("num", j)
        }else{
            changeButtonContainer[i+1].children[j].setAttribute("num", j)
        }
    }
    for(var j = 0; j < changeButtonContainer[i+2].children.length; j++){
        if(j === 2){
            changeButtonContainer[i+2].children[j].style.backgroundColor = "lightgray"
            changeButtonContainer[i+2].children[j].style.color = "#1684ff"
            changeButtonContainer[i+2].children[j].style.pointerEvents = "none"
            changeButtonContainer[i+2].children[j].setAttribute("num", j)
        }else{
            changeButtonContainer[i+2].children[j].setAttribute("num", j)
        }
    }
    for(var j = 0; j < changeButtonContainer[i+3].children.length; j++){
        if(j === 3){
            changeButtonContainer[i+3].children[j].style.backgroundColor = "lightgray"
            changeButtonContainer[i+3].children[j].style.color = "#1684ff"
            changeButtonContainer[i+3].children[j].style.pointerEvents = "none"
            changeButtonContainer[i+3].children[j].setAttribute("num", j)
        }else{
            changeButtonContainer[i+3].children[j].setAttribute("num", j)
        }
    }
}