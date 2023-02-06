const plus_button = document.getElementsByClassName("crud_button")[0];

plus_button.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  var crud_container = pai2;
  var header = pai3.children[0];
  var acr_container = pai3.children[2].children[0].children[8];
  let scrollbar = pai3.children[2].children[1]
  

  header.style.pointerEvents = "none";
  crud_container.style.pointerEvents = "none";
  acr_container.style.display = "flex";
  scrollbar.style.pointerEvents = "none"

  var label_button = pai3.children[2].children[0].children[4]
  let content_button = pai3.children[2].children[0].children[5]
  let show_button = pai3.children[2].children[0].children[6]
  content_button.value = null
  show_button.textContent = "Esperando Arquivo..."

  var acr_accept = acr_container.children[0];
  var acr_cancel = acr_container.children[1];

  label_button.style.pointerEvents = "auto";

  acr_accept.style.pointerEvents = "none";
  acr_cancel.style.pointerEvents = "none";
});
