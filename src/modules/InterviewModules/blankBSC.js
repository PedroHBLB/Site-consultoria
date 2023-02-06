export { blankBSC };

var blankBSC = (containerIndicador) => {
  let meta = containerIndicador.children[0].children[0].children[1];
  let real = containerIndicador.children[0].children[1].children[1];
  let indicador =
    containerIndicador.children[1].children[0].children[1].children[0];
  let textarea = containerIndicador.children[2].children[0];

  meta.value = "";
  real.value = "";
  indicador.value = "teste";
  textarea.value = "";
};
