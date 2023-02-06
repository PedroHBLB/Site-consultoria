const button = document.getElementById("arquivo");
const show = document.getElementsByClassName("file_show")[0];
const idemp = document.getElementsByName("IDEMP")[0];

button.addEventListener("change", (e) => {
  let pai1 = e.target.parentNode
  var text = e.target.value;
  text = text.split("\\");
  show.innerText = text[2];
  var accept = pai1.children[8].children[0].children[0];
  var reject = pai1.children[8].children[1].children[0];

  accept.style.pointerEvents = "auto";
  reject.style.pointerEvents = "auto";
});
