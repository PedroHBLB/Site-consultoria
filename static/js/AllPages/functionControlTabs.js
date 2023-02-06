const navegation = document.getElementsByClassName("navegation_change")[0];
const crud = document.getElementsByClassName("crud_container")[0];
const menu = document.getElementById("header_nav_button");

if (navegation) {
  navegation.style.display = "none";
  menu.addEventListener("click", (e) => {
    if (navegation.style.display === "none") {
      navegation.style.display = "block";
    } else {
      navegation.style.display = "none";
    }
  });
}

if (crud) {
  crud.style.display = "none";
  menu.addEventListener("click", (e) => {
    if (crud.style.display === "none") {
      crud.style.display = "block";
    } else {
      crud.style.display = "none";
    }
  });
}
