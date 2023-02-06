export { changeAnswer };
var changeAnswer = (SendContainer, json) => {
  for (var j = 1; j < SendContainer.children.length; j++) {
    if (SendContainer.children[j].getAttribute("textotermo") === json.TEXTOTERMO && SendContainer.children[j].getAttribute("grupo") === json.GRUPO) {
      SendContainer.children[j].value = JSON.stringify(json);
      alert("Resposta Alterada");
      return false
    }
  }
  return true;
};
