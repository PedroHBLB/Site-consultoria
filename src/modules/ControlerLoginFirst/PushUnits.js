export { pushUnits }

var pushUnits = (unidades, units)=>{
  unidades.forEach((unidade) => {
    units.push([
        unidade.UN_NOME,
        unidade.UN_END,
        unidade.UN_NUM,
        unidade.UN_BAIR,
        unidade.UN_CMPL,
        unidade.UN_CEP,
        unidade.UN_MUNI,
        unidade.UN_ESTADO,
        unidade.UN_PAIS,
        unidade.IDEMP,
      ]);
  });
}