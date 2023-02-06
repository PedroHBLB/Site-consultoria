const ButtonFlag = document.getElementsByClassName("flag_button");
const body = document.getElementsByTagName("body")[0];

const divSelect = document.createElement("div");
const select = document.createElement("select");
const span = document.createElement("span");

divSelect.appendChild(select);
divSelect.appendChild(span);

divSelect.className = "language_select";
select.className = "config_select";
span.className = "square square_blue";

let linguas = ButtonFlag[0].getAttribute("linguas").split(",");
for (var i = 0; i < linguas.length; i++) {
  let option = document.createElement("option");
  option.textContent = linguas[i];
  select.appendChild(option);
}

for (var i = 0; i < ButtonFlag.length; i++) {
  ButtonFlag[i].addEventListener("click", (e) => {
    let key = e.target.getAttribute("key");
    if (key === "off") {
      body.appendChild(divSelect);
      e.target.setAttribute("key", "on");
    } else {
      body.removeChild(divSelect);
      e.target.setAttribute("key", "off");
    }
  });
}
