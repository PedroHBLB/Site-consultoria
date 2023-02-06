export { ConsultantList }

var ConsultantList = (consultores, consultoresLista)=>{
    let consultor = ""
    for (var i = 0; i < consultores.length; i++) {
        consultor = consultor + consultores[i];
        if (consultores[i] === "}") {
          consultoresLista.push(consultor);
          consultor = "";
          i++;
        }
      }
}
