const cancel_button = document.getElementsByClassName("ACR_button")[1];

cancel_button.addEventListener("click", (e) => {
  let pai2 = e.target.parentNode.parentNode
  let pai3 = e.target.parentNode.parentNode.parentNode
  let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
  var header = pai5.children[0];
  var crud = pai5.children[1];
  var label_button = pai3.children[4]
  var acr_container = pai2;
  var input = pai3.children[2];
  let content = pai5.children[2].children[1]
  
  header.style.pointerEvents = "auto";
  crud.style.pointerEvents = "auto";
  label_button.style.pointerEvents = "none";
  acr_container.style.display = "none";
  input.innerText = "Esperando Arquivo...";
  content.style.pointerEvents = "auto"
});
