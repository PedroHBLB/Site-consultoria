export { hiddenPage };

var hiddenPage = (listaPage) =>{
  for(var i = 0; i < listaPage.length;i++){
    listaPage[i].style.display = "none";
  }
};
