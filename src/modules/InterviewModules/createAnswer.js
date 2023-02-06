export { createAnswer };
var createAnswer = (SendContainer, key, json, cont) => {
    if (key) {
        let input = document.createElement("input");
        input.value = JSON.stringify(json);
        input.name += "RESPOSTA_" + cont;
        input.className += "ghost";
        input.setAttribute("textotermo", json.TEXTOTERMO);
        input.setAttribute("grupo", json.GRUPO);
        SendContainer.appendChild(input);
        alert("Resposta Salva");
      }
};
