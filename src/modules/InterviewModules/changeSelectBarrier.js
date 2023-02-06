export { changeSelectBarrier };
var changeSelectBarrier = (atividade, entrevista, door, json) => {
    for (var j = 0; j < atividade.children.length; j++) {
        if(door){
          if(atividade.children[j].children[1] != undefined && atividade.children[j].children[1].getAttribute("tipoentrada") == "11"){
            let num = (parseInt(json.GRUPO))
            let select = atividade.children[j].children[num+1].children[1].children[0].children[1].children[0]
            let indicadores = json.RESPOSTA.split(";")
            for (var l = select.children.length-1; l >= 0; l--) {
              select.children[l].remove()
            }
            for (var l = 0; l < indicadores.length; l++) {
              let option = document.createElement("option")
              option.textContent = indicadores[l]
              option.value = indicadores[l]
              select.appendChild(option)
            }
          }
          break
        }
        if(atividade.children[j] == entrevista){
          door = true
        }
      }
};
