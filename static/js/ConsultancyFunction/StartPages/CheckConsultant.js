const buttons = document.getElementsByClassName("canvas_check");

for(var i = 0; i < buttons.length;i++){
    let ctx = buttons[i].getContext("2d");
    if(buttons[i].getAttribute("ativo") === "true"){
        ctx.fillStyle = 'green'  
        ctx.fillRect(0,0,1000,1000);
    }else{
        ctx.fillStyle = 'red'  
        ctx.fillRect(0,0,1000,1000);
    }
}
