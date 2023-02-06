export { removeAnswerInd };
var removeAnswerInd = (SendContainer, g) => {
  for (var l = SendContainer.children.length - 1; l > 0; l--) {
    if (SendContainer.children[l].getAttribute("type") === "indicador" || SendContainer.children[l].getAttribute("type") === "vazio") {
      if(SendContainer.children[l].getAttribute("grupo") == g){
        SendContainer.removeChild(SendContainer.children[l]);
      }
    }
  }
};
