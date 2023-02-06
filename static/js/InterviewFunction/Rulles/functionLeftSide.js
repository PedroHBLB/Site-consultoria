const task = document.getElementsByClassName("left_side_sub_container")[0];
const color = task.getAttribute("color")

const middle_line = document.getElementsByClassName("left_side_middle_line_1")[0];
const input_1 = document.getElementsByClassName("left_side_label")[1];
const input_2 = document.getElementsByClassName("left_side_label")[3];

task.style.border = "2px solid "+color
middle_line.style.border = "2px solid "+color
middle_line.style.background = color
input_1.style.border = "2px solid "+color
input_2.style.border = "2px solid "+color

input_1.style.width = 60
input_2.style.width = 100
