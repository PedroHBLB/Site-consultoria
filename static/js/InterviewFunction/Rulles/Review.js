const save_button = document.getElementsByClassName("save_button")
const stats = document.getElementsByClassName("status")[0]

if(stats.textContent == "2"){
    for(var i = 0; i < save_button.length; i++){
        save_button[i].style.display = "none"
    }
}