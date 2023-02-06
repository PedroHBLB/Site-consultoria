export { buttonAllowed };

var buttonAllowed = (listaBtk)=> {
  for(var i = 0; i < listaBtk.length;i++){
    listaBtk[i].style.background = "white";
    listaBtk[i].style.color = "#1684ff";
    listaBtk[i].style.pointerEvents = "auto";
  }
};
