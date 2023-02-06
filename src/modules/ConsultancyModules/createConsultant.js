export { createConsultant }

var createConsultant = (scrollbar, chooseConsultores)=>{
    chooseConsultores.forEach((consultor) => {
        let divButton = document.createElement('div')
        let button = document.createElement("button");
        let buttonContent = document.createElement('div')
        let icon = document.createElement("i");
        let line = document.createElement("hr");
        let nome = document.createElement("p");
        let atributos = document.createElement("p");
        let check = document.createElement("canvas");
      
        divButton.className = "model_button"
        button.className += "all_button scroll_button_consultancy consultants_button";
        buttonContent.className += "scroll_button_consultancy_content"
        icon.className += "fa-solid fa-user-large button_icon";
        line.className += "button_middle_line";
        nome.className += "button_text";
        atributos.className += "ghost";
        check.className += "canvas_check"
        check.setAttribute("ativo",consultor.FLGATIVO)


      
        scrollbar.appendChild(divButton);
        divButton.appendChild(button)
        button.appendChild(buttonContent)
        buttonContent.appendChild(icon);
        buttonContent.appendChild(line);
        buttonContent.appendChild(nome);
        buttonContent.appendChild(atributos);
        button.appendChild(check)
      
        nome.textContent = consultor.CONSULTOR;
        atributos.textContent =
          consultor.CONSULTOR +
          ";" +
          consultor.CSTR_ESPEC +
          ";" +
          consultor.CSTR_EMAIL +
          ";" +
          consultor.CSTR_TEL +
          ";" +
          consultor.IDPAPEL +
          ";" +
          consultor.CSTR_LINGUA +
          ";" +
          consultor.FLGATIVO +
          ";" +
          consultor.ID;
      });
}