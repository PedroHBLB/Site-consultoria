export { pushCompany }

var pushCompany = (companys, empresa)=>{
    companys.push([
        empresa.PF_APELIDO,
        empresa.ID,
        empresa.EM_NOME,
        empresa.EM_CNPJ,
        empresa.PF_NOME,
        empresa.PF_CARGO,
        empresa.PF_EMAIL,
        empresa.PF_TEL,
        empresa.POSICAO
      ]);
}