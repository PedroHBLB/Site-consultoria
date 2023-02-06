const Projetos = document.getElementsByClassName("project_container");
const left = document.getElementsByClassName("projetos_button_left")[0];
const rigth = document.getElementsByClassName("projetos_button_rigth")[0];
let numTotal = Projetos.length;
let numAtual = 0;


if(Projetos.length >1){
    left.addEventListener("click", (e) =>{
        let numAnterior = numAtual
        numAtual -= 1;
        if(numAtual === -1){
            numAtual = numTotal-1
        }
        Projetos[numAtual].style.display = "flex";
        Projetos[numAnterior].style.display = "none"
        
        
    })

    rigth.addEventListener("click", (e) =>{
        let numAnterior = numAtual
        numAtual += 1;
        if(numAtual === numTotal){
            numAtual = 0
        }
        Projetos[numAtual].style.display = "flex";
        Projetos[numAnterior].style.display = "none"
    })
}
