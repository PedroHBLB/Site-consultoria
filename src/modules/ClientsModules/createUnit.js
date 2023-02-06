export {createUnit}
var createUnit = (scrollbar, unidadesLista)=>{
    unidadesLista.forEach((unidade) => {
        let divButton = document.createElement('div')
        let button = document.createElement("button");
        let icon = document.createElement("i");
        let line = document.createElement("hr");
        let nome = document.createElement("p");
        let atributos = document.createElement("p");
      
        divButton.className = "model_button"
        button.className += "all_button scroll_button units_button";
        icon.className += "fa-solid fa-building button_icon";
        line.className += "button_middle_line";
        nome.className += "button_text";
        atributos.className += "ghost";
      
        scrollbar.appendChild(divButton);
        divButton.appendChild(button)
        button.appendChild(icon);
        button.appendChild(line);
        button.appendChild(nome);
        button.appendChild(atributos);
      
        nome.textContent = unidade.UN_NOME;
        atributos.textContent =
          unidade.UN_NOME +
          ";" +
          unidade.UN_END +
          ";" +
          unidade.UN_NUM +
          ";" +
          unidade.UN_BAIR +
          ";" +
          unidade.UN_CMPL +
          ";" +
          unidade.UN_CEP +
          ";" +
          unidade.UN_MUNI +
          ";" +
          unidade.UN_ESTADO +
          ";" +
          unidade.UN_PAIS +
          ";" +
          unidade.ID;
      });
}