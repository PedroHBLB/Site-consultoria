let canvas = document.getElementsByClassName("kpi_canvas");
let valores = document.getElementsByClassName("topkpiValor")[0].textContent

let size = []

valores = valores.split(",")
for(var i = 0; i < valores.length;i+=2){
  if(valores[i] != 0){
    size.push(valores[i+1])
  }else{
    break
  }
}


let colors = ["rgb(225, 90, 60)","rgb(29, 177, 238)", "rgb(251, 185, 88)","rgb(25, 175, 84)","rgb(112,112,112)"]
let raios = [74,64,54,44,34]

for(var i = 0; i < canvas.length; i++){
  let c = canvas[i]
  let ctx = c.getContext("2d");
  ctx.fillStyle = colors[i];
  if(size[i] === undefined){
    size[i] = 0
  }
  let s = (size[i]/1000)*100
  let tamanho = (100-s)/100
  let start = tamanho*c.height 
  ctx.fillRect(0, start, c.width, c.height);

  for (var j = 0; j < 10; j++) {
    if(j < 9){
      let y = ((j+1)/10)*c.height
      ctx.moveTo(c.width, y);
      ctx.lineTo(0, y);
      ctx.stroke();
    }
  }
}
