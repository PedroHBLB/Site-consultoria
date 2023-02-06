const textarea = document.getElementsByClassName("textareaTEXTO")[0];
const input = document.getElementsByName("TEXTO")[0];

textarea.addEventListener("change", (e) => {
  let texto = e.target.value;
  input.value = texto;
});
