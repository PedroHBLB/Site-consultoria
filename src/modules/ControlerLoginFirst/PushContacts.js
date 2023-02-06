export { pushContacts }

var pushContacts = (contatos, allPapel, contacts)=>{
  contatos.forEach((contato) => {
    let papelTemp = "";
    allPapel.forEach((papel) => {
      if (parseInt(papel.ID) === parseInt(contato.IDPAPEL)) {
        papelTemp = papel.DESCRICAO;
      }
    });

    contacts.push([
      contato.CT_NOME,
      contato.CT_CARGO,
      contato.CT_TEL,
      contato.CT_EMAIL,
      contato.IDUNI,
      contato.IDAREA,
      papelTemp,
      contato.CT_LINGUA,
      contato.IDEMP
    ]);
  });
}