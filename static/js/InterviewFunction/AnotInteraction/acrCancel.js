const cancel_button = document.getElementsByClassName("ACR_button")[3];

cancel_button.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  let pai4 = e.target.parentNode.parentNode.parentNode.parentNode
  let pai6 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
  let pai7 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
  var header = pai7.children[0];
  var crud = pai7.children[1];
  var acr_container = pai2;
  let title = pai4.children[0].children[1]
  let annotation = pai3.children[0].children[1]
  let text = pai3.children[0].children[2]
  let scrollbar = pai6.children[1]
   
  header.style.pointerEvents = "auto";
  crud.style.pointerEvents = "auto";
  acr_container.style.display = "none";
  title.style.pointerEvents = "none"
  annotation.style.pointerEvents = "none"
  title.value = ""
  annotation.value = ""
  text.value = ""
  scrollbar.style.pointerEvents = "auto"
});