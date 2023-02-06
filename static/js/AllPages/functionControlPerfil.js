const button = document.getElementsByClassName("header_perfil_button");
const body = document.getElementsByTagName("body")[0];
const perfilContent = document.getElementsByClassName("perfil_content")[0].textContent;

const perfil = document.createElement("div");
const row = document.createElement("div");
const company = document.createElement("p");
const logout = document.createElement("button");
const icon = document.createElement("i");
const line = document.createElement("hr");
const texto = document.createElement("div");
const nome = document.createElement("p");
const paper = document.createElement("p");

perfil.appendChild(row);
perfil.appendChild(icon);
perfil.appendChild(line);
perfil.appendChild(texto);
row.appendChild(company);
row.appendChild(logout);
texto.appendChild(nome);
texto.appendChild(paper);

perfil.className = "perfil_container";
row.className = "row_perfil";
logout.className = "logout_button";
icon.className = "fa-solid fa-circle-user perfil_icon";
line.className = "perfil_line";
texto.className = "perfil_texto";

logout.textContent = "Sair";
let listaPerfilCotent = perfilContent.split(";");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    let key = pai1.getAttribute("key");
    if (key === "off") {
      company.textContent = listaPerfilCotent[2];
      nome.textContent = listaPerfilCotent[0];
      paper.textContent = listaPerfilCotent[1];
      body.appendChild(perfil);

      pai1.setAttribute("key", "on");
    } else if (key === "on") {
      body.removeChild(perfil);
      pai1.setAttribute("key", "off");
    }
  });
}

logout.addEventListener("click", (e) => {
  window.location.href = "/";
});
