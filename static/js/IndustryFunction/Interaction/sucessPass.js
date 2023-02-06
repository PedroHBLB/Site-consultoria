const Sucessos = document.getElementsByClassName("sucess_pre_bot_container")[0];
const left = document.getElementsByClassName("sucess_button_left")[0];
const rigth = document.getElementsByClassName("sucess_button_rigth")[0];
let numTotal = Sucessos.children.length;
let numAtual = 0;

if(Sucessos.children.length >0){
    left.addEventListener("click", (e) =>{
        let numAnterior = numAtual
        numAtual -= 1;
        if(numAtual === -1){
            numAtual = numTotal-1
        }
        Sucessos.children[numAtual].style.display = "flex";
        Sucessos.children[numAnterior].style.display = "none"
        
        
    })
  
    rigth.addEventListener("click", (e) =>{
        let numAnterior = numAtual
        numAtual += 1;
        if(numAtual === numTotal){
            numAtual = 0
        }
        Sucessos.children[numAtual].style.display = "flex";
        Sucessos.children[numAnterior].style.display = "none"
    })
}