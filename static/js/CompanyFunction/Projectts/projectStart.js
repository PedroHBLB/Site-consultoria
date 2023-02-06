const Projetos = document.getElementsByClassName("project_container");

for(var i = 0; i < Projetos.length; i++){
    if(i!=0){
        Projetos[i].style.display = "none"
    }
    for(var j = 0; j < Projetos[i].children[1].children.length;j++){
        if(j!=0){
            Projetos[i].children[1].children[j].style.display = "none"
        }
    }
}