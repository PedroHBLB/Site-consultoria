export {noneButton}
var noneButton = (texto, header, navs, crud, scrollbar, page, navSize)=>{
    alert("Selecione algo para "+texto); 
    header.style.pointerEvents = "auto";
    for (var i = 0; i < navSize; i++) {
      navs.children[i].style.pointerEvents = "auto";
    }
    crud.style.display = "flex";
    navs.style.pointerEvents = "auto";
    scrollbar.style.pointerEvents = "auto";
    page.children[2].style.pointerEvents = "none";
}



