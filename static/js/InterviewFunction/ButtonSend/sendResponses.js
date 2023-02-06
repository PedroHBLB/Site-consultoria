const salva = document.getElementsByClassName("interview_side_button")[0];
const encerra = document.getElementsByClassName("interview_side_button")[1];
const SendContainer = document.getElementsByClassName("Send_container")[0];

if (salva != undefined) {
  salva.addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    let input = document.createElement("input");
    input.value = "Salva," + pai1.getAttribute("idregen");
    input.name = "Salva";
    input.className = "ghost";
    SendContainer.appendChild(input);
  });
}

if (encerra != undefined) {
  encerra.addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    let input = document.createElement("input");
    input.value = "Encerra," + pai1.getAttribute("idregen");
    input.name = "Encerra";
    input.className = "ghost";
    SendContainer.appendChild(input);
  });
}