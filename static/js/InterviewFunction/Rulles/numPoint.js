const numPoint = document.getElementsByClassName("num_point");
for (var i = 0; i < numPoint.length; i++) {
  numPoint[i].addEventListener("keyup", (e) => {
    const regex = /^[0-9]+(\.[0-9]*)?$/;
    let button = e.target;
    let input = e.target.value;
    if (regex.test(input)) {
      if (input > 100) {
        button.value = 100;
        input = 100;
      } else if (input < 0) {
        button.value = 0;
        input = 0;
      }
    } else {
      if (input.length > 0) {
        button.value = input.substring(0, input.length - 1);
        input = input.substring(0, input.length - 1);
      }
    }
  });
}
