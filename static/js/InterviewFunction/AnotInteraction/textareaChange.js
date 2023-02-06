const textarea = document.getElementsByClassName("textarea_annotation_form")[0];
const textoInput = document.getElementsByName("TEXTO")[0];

textarea.addEventListener("change", (e) => {
  textoInput.value = e.target.value;
});
