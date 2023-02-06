export { ConsultancyList }

var ConsultancyList = (consultorias, consultoriasLista)=>{
    let consultoria = ""
    for (var i = 0; i < consultorias.length; i++) {
        consultoria = consultoria + consultorias[i];
        if (consultorias[i] === "}") {
          consultoriasLista.push(consultoria);
          consultoria = "";
          i++;
        }
      }
}


