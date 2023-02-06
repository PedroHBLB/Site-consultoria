import { getMetaRealObj } from "/modules/InterviewModules/getMetaRealObj.js";
import { getResposta } from "/modules/InterviewModules/getResposta.js";

const entrevista = document.getElementsByClassName("entrevista_content")
for(var i = 0; i < entrevista.length; i++){
    if(entrevista[i].children.length >= 2){
        let entrevistaRespostas = entrevista[i].children[0].children[3]
        if(entrevistaRespostas!= undefined && entrevistaRespostas.children.length === 5){
            let resposta = entrevistaRespostas.children[0].textContent;
            let meta = entrevistaRespostas.children[1].textContent;
            let real = entrevistaRespostas.children[2].textContent;
            let obj = entrevistaRespostas.children[3].textContent;
            let tipoentrada = entrevistaRespostas.children[4].textContent;
            let MRO = entrevista[i].children[2]
            getResposta(entrevista[i].children[1], resposta, tipoentrada)
            getMetaRealObj(MRO, meta, real, obj)
        }
    }
    
}