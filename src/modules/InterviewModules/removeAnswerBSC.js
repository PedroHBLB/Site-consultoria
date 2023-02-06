export {removeAnswerBSC}
var removeAnswerBSC = (SendContainer)=>{
    for (var l = SendContainer.children.length - 1; l > 0; l--) {
        if (SendContainer.children[l].getAttribute("type") === "bsc" || SendContainer.children[l].getAttribute("type") === "vazioBSC") {
          SendContainer.removeChild(SendContainer.children[l]);
        }
      }
}