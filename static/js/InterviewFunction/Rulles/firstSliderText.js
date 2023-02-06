const sliderContainer = document.getElementsByClassName("slider_container");
for(var i = 0;i < sliderContainer.length;i++){
    let texto = sliderContainer[i].children[3].textContent.split(";");
    for(var j = 0; j < texto.length;j++){
        texto[j] = texto[j].trim();
    }

    for(var l = 0; l < texto.length; l++){
        if(texto[l] == "1" && sliderContainer[i].children[1].textContent.trim() == ""){
            sliderContainer[i].children[1].textContent = texto[l-1]
            break;
        }
    }
}

