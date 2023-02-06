const nav = document.getElementsByClassName("navegation_container")[0];
const crud_1 = document.getElementsByClassName("crud_container")[0];
const crud_2 = document.getElementsByClassName("crud_container")[1];

const nav_file_button = document.getElementsByClassName("nav_route_interview")[0];
const nav_annotation_button = document.getElementsByClassName("nav_route_interview")[1];

const return_task = document.getElementsByClassName("header_return_interview");
const pages = document.getElementsByClassName("right_side")[0];

const leftButtons = document.getElementsByClassName("left_side_sub_container")[1]

nav.style.display = "flex";
crud_1.style.display = "flex";
crud_2.style.display = "flex";


nav_file_button.addEventListener("click", (e) => {

  var pages_temp = e.target.parentNode.parentNode.parentNode;
  pages_temp.children[0].style.display = "none";
  pages_temp.children[1].style.display = "flex";
  pages_temp.children[2].style.display = "none";
  leftButtons.style.display = "none"
});

nav_annotation_button.addEventListener("click", (e) => {
  
  var pages_temp = e.target.parentNode.parentNode.parentNode;
  pages_temp.children[0].style.display = "none";
  pages_temp.children[1].style.display = "none";
  pages_temp.children[2].style.display = "flex";
  leftButtons.style.display = "none"
});

for (var i = 0; i < return_task.length; i++) {
  return_task[i].addEventListener("click", (e) => {
    pages.children[0].style.display = "flex";
    pages.children[1].style.display = "none";
    pages.children[2].style.display = "none";
    leftButtons.style.display = "flex"
  });
}
