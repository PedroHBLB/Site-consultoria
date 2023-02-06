export { createList }
var createList = (lista, listaFinal)=>{
    let item = ""
    for (var i = 0; i < lista.length; i++) {
        item = item + lista[i];
        if (lista[i] == "}") {
          listaFinal.push(item);
          item = "";
          i++;
        }
    }

    for (var i = 0; i < listaFinal.length; i++) {
        listaFinal[i] = JSON.parse(listaFinal[i]);
    }
}