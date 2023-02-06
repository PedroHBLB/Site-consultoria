const slider = document.getElementsByClassName("slider")

for(var i = 0; i < slider.length; i++){
    slider[i].addEventListener("change", (e)=>{
        let pai1 = e.target.parentNode
        let texto = pai1.children[1]
        let sliderValue = pai1.children[2].value
        let valores = pai1.children[3].textContent
        valores = valores.split(";")
        
        for(var j = 0; j < valores.length;j++){
            valores[j] = valores[j].trim();
        }
        
        for(var j = 1; j < valores.length;j++){
            if(valores[j] === sliderValue){
                texto.textContent = valores[j-1]
            }
        }
    })
}