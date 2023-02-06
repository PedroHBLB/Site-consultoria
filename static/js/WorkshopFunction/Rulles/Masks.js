const num = document.getElementsByClassName("num");

for (var i = 0; i < num.length; i++) {
  num[i].addEventListener("keyup", (e) => {
    let numTemp = e.target;
    numTemp.value = numTemp.value.replace(/\D/g, "");
  });
}
