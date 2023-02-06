export { adjustContacts };

var adjustContacts = async (ModelUnidades, ModelAreas, contacts) => {
  for (var i = 0; i < contacts.length; i++) {
    let unidadesTemp = "";
    ModelUnidades.forEach((unidade) => {
      if (parseInt(unidade.toJSON().ID) === parseInt(contacts[i][4])) {
        unidadesTemp = unidade.toJSON().UN_NOME;
      }
    });
    let areasTemp = "";
    ModelAreas.forEach((area) => {
      if (parseInt(area.toJSON().ID) === parseInt(contacts[i][5])) {
        areasTemp = area.toJSON().DESCRICAO;
      }
    });
    contacts[i][4] = unidadesTemp
    contacts[i][5] = areasTemp
  }
};
