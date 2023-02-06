const ctxLista = document.getElementsByClassName("myVariousCanvas");
const valorString = document.getElementsByClassName("canvasValue");


for(var i = 0; i < ctxLista.length;i++){
    let ctx = ctxLista[i].getContext("2d");
    let string = valorString[i].textContent.split("/");
    let num = parseInt(string[0])
    let valor = num*(96/16);
    ctx.fillStyle = 'green'  
    ctx.fillRect(0,0,valor,20);
    ctx.fillStyle = 'red'  
    ctx.fillRect(valor,0,96-valor,20);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeRect(0,0,96,20);
}
