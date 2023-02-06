export { createAnswerInd };
var createAnswerInd = (SendContainer,json,cont) => {
  let input = document.createElement("input");
  input.value = JSON.stringify(json);
  input.name += "RESPOSTA_IND_" + cont;
  input.className += "ghost";
  input.setAttribute("indicador", json.INDICADOR);
  input.setAttribute("numindicador", json.NUMINDICADOR);
  input.setAttribute("type", json.TYPE);
  input.setAttribute("grupo", json.GRUPO);
  SendContainer.appendChild(input);
};
