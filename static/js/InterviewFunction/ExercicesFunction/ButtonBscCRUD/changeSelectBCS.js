const selectBSC = document.getElementsByClassName("bsc_select_change");

for (var i = 0; i < selectBSC.length; i++) {
  selectBSC[i].addEventListener("change", (e) => {
    let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
    let BSC = e.target.value;
    let selectInd = pai4.children[2].children[1].children[0].children[1].children[0];
    let first = true;
    for (var j = 0; j < selectInd.children.length; j++) {
      if (selectInd.children[j].getAttribute("tipo") === BSC) {
        selectInd.children[j].style.display = "flex";
        if (first) {
          selectInd.value = selectInd.children[j].value;
          first = false;
        }
      } else {
        selectInd.children[j].style.display = "none";
      }
    }
  });
}
