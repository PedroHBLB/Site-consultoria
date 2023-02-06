const button = document.getElementById("arquivo");
const show = document.getElementsByClassName("padraentrevista_file_show")[0];

button.addEventListener("change", (e) => {
  let text = e.target.value;
  text = text.split("\\");
  show.innerText = text[2];
});
