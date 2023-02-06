let canvas = document.getElementsByClassName('big_circle');
let tooltipLista = document.getElementsByClassName("tooltip");
let preLista = document.getElementsByClassName("pre_big_circle");
for(var i = 0 ; i < tooltipLista.length;i++){
    tooltipLista[i].style.position = "absolute"
}


let porcent = [[50,50],[27,73],[62,38]]

for(var i = 0; i < canvas.length; i++){
    let firstPart = porcent[i][0];
    let secondPart = porcent[i][1];
    let tooltip = tooltipLista[i]

    preLista[i].onmouseover = (e) => {
        tooltip.style.display = "none"
    }

    canvas[i].onmousemove = (e) =>{    
        let x = e.offsetX
        let y = e.offsetY
        let xCentro = 160
        let yCentro = 160
        let xquad = (x-xCentro)*(x-xCentro)
        let yquad = (y-yCentro)*(y-yCentro)
        let raioMaiorquad = (2-xCentro)*(2-xCentro)+(160-yCentro)*(160-yCentro)
        let raioMenorquad = (83-xCentro)*(83-xCentro)+(160-yCentro)*(160-yCentro)
        let result = xquad+yquad
        if(result > raioMenorquad && result < raioMaiorquad){
            let anguloPadrao = 180 - ((firstPart*180)/100)
            let anguloRad = Math.atan2(yCentro - 160, xCentro - 160) - Math.atan2(y - 160, x - 160) ;
            let anguloGrau =  anguloRad * (180 / Math.PI);
            if(anguloGrau == -180){
                anguloGrau = 180
            }
            if(anguloGrau > anguloPadrao){
                tooltip.children[0].innerHTML = "Ação: "+ firstPart+"%"
            }else if(anguloGrau < anguloPadrao){
                tooltip.children[0].innerHTML = "Cripto: "+ secondPart+"%";
            }
            tooltip.style.left = e.clientX + "px";
            tooltip.style.top = e.clientY + "px";
            tooltip.style.backgroundColor = "black"
            tooltip.style.color = "white"
            tooltip.style.display = "block";  
            
        }else{
            tooltip.style.display = "none";
        }

    }

    let ctx = canvas[i].getContext('2d');

    let meio = (porcent[i][0]* Math.PI)/100
    ctx.beginPath();
    ctx.arc(canvas[i].width/2, canvas[i].height, (canvas[i].width/2)-2,  Math.PI+meio, 2*Math.PI+meio, true);
    ctx.fillStyle = '#4169E1'
    ctx.fill();
    ctx.stroke();

    /*dark*/
    ctx.beginPath();
    ctx.arc(canvas[i].width/2, canvas[i].height, (canvas[i].width/2)-2,  Math.PI+meio, 2*Math.PI+meio, false);
    ctx.fillStyle = '#191970'
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas[i].width/2, canvas[i].height, (canvas[i].width/4)-2,  Math.PI, 2 * Math.PI);
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.stroke();


}

