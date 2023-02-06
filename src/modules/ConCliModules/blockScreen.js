export { blockScreen };
var blockScreen = (main, header, navs, crud, navSize) => {
  var num = crud.getAttribute("number");
  var page = main.children[num];
  header.style.pointerEvents = "none";
  navs.style.pointerEvents = "none";
  for (var i = 0; i < navSize; i++) {
    navs.children[i].style.pointerEvents = "none";
  }
  crud.style.display = "none";
  return [num, page]
};
