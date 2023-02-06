import { eventsIndicador } from "/modules/InterviewModules/eventsIndicador.js"

const barrierContainer = document.getElementsByClassName("barrier_container")
const indButtons = document.getElementsByClassName("barrier_ind_button")

for(var i=0;i < indButtons.length;i++){
    indButtons[i].setAttribute("resposta", indButtons[i].children[2].textContent)
}


for(var i=0;i < barrierContainer.length;i++){
    let crud = barrierContainer[i].children[0].children[0]
    let buttonsContainer = barrierContainer[i].children[1]

    for(var j = 0; j < buttonsContainer.children.length;j++){
        let button = buttonsContainer.children[j]
        eventsIndicador(button, crud, buttonsContainer)
    }
}