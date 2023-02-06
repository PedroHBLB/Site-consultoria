const objetivos = document.getElementsByClassName("objetivos")[0].textContent
const texts = document.getElementsByClassName("top_text");
let canvas = document.getElementsByClassName("top_circle");
let objs = objetivos.split(",")
let cont = 0
let objetivosLista = [0,0,0,0,0,0]

for(var i =0; i < objs.length;i++){
    if(objs[i] == "Custo"){
        objetivosLista[0] += 1
    }else if(objs[i] == "Qualidade"){
        objetivosLista[1] += 1
    }else if(objs[i] == "Flexibilidade"){
        objetivosLista[2] += 1
    }else if(objs[i] == "Velocidade"){
        objetivosLista[3] += 1
    }else if(objs[i] == "Confiabilidade"){
        objetivosLista[4] += 1
    }else if(objs[i] == "Inovação"){
        objetivosLista[5] += 1
    }
    cont += 1
}

for(var i =0; i < texts.length;i++){
    texts[i].textContent = ((objetivosLista[i]/cont)*100).toFixed(2)+"%"
}

for(var i =0; i < canvas.length;i++){
    let c = canvas[i]
    let ctx = c.getContext("2d");
    let giro = (2*Math.PI)*parseFloat(objetivosLista[i]/cont)

    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 70, (3/2)*Math.PI, (7/2)*Math.PI);
    ctx.fillStyle = "#3278c4";
    ctx.fill()
    ctx.stroke();

    if(giro < Math.PI){
        ctx.beginPath();
        ctx.arc(c.width/2, c.height/2, 70, (3/2)*Math.PI+giro,(3/2)*Math.PI+giro+Math.PI);
        ctx.fillStyle = "white";
        ctx.fill()
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(c.width/2, c.height/2, 70, (1/2)*Math.PI,(3/2)*Math.PI);
        ctx.fillStyle = "white";
        ctx.fill()
        ctx.stroke();
    }else if(giro < 2*Math.PI){
        ctx.beginPath();
        ctx.arc(c.width/2, c.height/2, 70, (3/2)*Math.PI+giro,(3/2)*Math.PI+giro+Math.PI);
        ctx.fillStyle = "white";
        ctx.fill()
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(c.width/2, c.height/2, 70, (3/2)*Math.PI, (5/2)*Math.PI);
        ctx.fillStyle = "#1684ff";
        ctx.fill()
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 30, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.stroke();


   
}
