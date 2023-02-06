const fileButton = document.getElementsByClassName("file_scroll_button")
const fileText = document.getElementsByClassName("filename_text")[0]

for (var i = 0; i < fileButton.length; i++) {
    fileButton[i].onmouseover = function (e) {
        let filename = e.path[0].getAttribute("FileName")
        fileText.style.display = "flex"
        fileText.textContent = filename
      ;
    };
    fileButton[i].onmouseout = function (e) {
        fileText.style.display = "none"
        fileText.textContent = ""
    };
}