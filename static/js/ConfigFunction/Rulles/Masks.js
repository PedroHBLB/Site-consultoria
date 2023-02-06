const num = document.getElementsByClassName("num")[0]

num.addEventListener("keyup", (e) => {
    num.value = num.value.replace(/\D/g, "");
    }
  );