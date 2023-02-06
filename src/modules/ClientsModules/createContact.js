export {createContact}
var createContact = (scrollbar, contatcsLista)=>{
    contatcsLista.forEach((contatc) => {
        let divButton = document.createElement('div')
        let button = document.createElement("button");
        let icon = document.createElement("i");
        let line = document.createElement("hr");
        let nome = document.createElement("p");
        let cargo = document.createElement("p");
        let atributos = document.createElement("p");
      
        divButton.className = "model_button"
        button.className += "all_button scroll_button contacts_button";
        icon.className += "fa-solid fa-user-large button_icon";
        line.className += "button_middle_line";
        nome.className += "button_text";
        cargo.className += "button_text";
        atributos.className += "ghost";
      
        scrollbar.appendChild(divButton);
        divButton.appendChild(button)
        button.appendChild(icon);
        button.appendChild(line);
        button.appendChild(nome);
        button.appendChild(cargo);
        button.appendChild(atributos);
      
        nome.textContent = contatc.CT_NOME;
        cargo.textContent = contatc.CT_CARGO;
      
        atributos.textContent =
          contatc.CT_NOME +
          ";" +
          contatc.CT_CARGO +
          ";" +
          contatc.CT_TEL +
          ";" +
          contatc.CT_EMAIL +
          ";" +
          contatc.IDUNI +
          ";" +
          contatc.IDAREA +
          ";" +
          contatc.IDPAPEL +
          ";" +
          contatc.CT_LINGUA +
          ";" +
          contatc.ID;
      });
}