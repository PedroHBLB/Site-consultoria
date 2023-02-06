import { ModelEmpresa } from "../../models/empresa.js"
import { ModelPadraoentrevista } from "../../models/padraoentrevista.js";
import { ModelProjetos } from "../../models/projetos.js";
import { ModelRegentrevista } from "../../models/regentrevista.js";
import { ModelRespentrevista } from "../../models/respentrevista.js";
import { ModelRespindentrevista } from "../../models/respindentrevista.js";
import { ModelSchedule } from "../../models/schedule.js";

var controlerBenchCompany = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      let topkpi = [0,0,0,0,0]
      const empresa = await ModelEmpresa.findAll({
        where:{
          ID:req.query.company
        }
      })

      const schedule = await ModelSchedule.findAll({
        where:{
          IDEMP:req.query.company,
          IDOPER: 2,
          IDTAREFA: 2
        }
      })

      let respostas = []
      let dados = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
      if(schedule.length > 0){
        /*const regen = await ModelRegentrevista.findAll({
          where:{
            IDSCH: schedule[0].ID
          }
        })*/

        const respen = await ModelRespentrevista.findAll({
          where:{
            IDSCH: schedule[0].ID,
            IDTIPOENTRADA: 3
          }
        })
      
        for(var i = 0; i < respen.length; i++){
          let pd = await ModelPadraoentrevista.findAll({
            where:{
              ID: respen[i].IDPADRAOENTREVISTA
            }
          })
          if(pd[0].GRUPO == false){
            respostas.push(respen[i].toJSON())
          }
        }


        const respenIndicadores = await ModelRespentrevista.findAll({
          where:{
            IDSCH: schedule[0].ID,
            IDTIPOENTRADA: 10,
            IDPADRAOENTREVISTA: 49
          }
        })

        const respinIndicadores = await ModelRespindentrevista.findAll({
          where:{
            IDRESPENTREVISTA: respenIndicadores[0].ID,
          }
        })
        
        for(var i = 0; i < respinIndicadores.length; i++){
          let door = true
          for(var j = 0; j < topkpi.length; j++){
            if(topkpi[j][0] === respinIndicadores[i].INDICADOR){
              door = false
              if(parseInt(topkpi[j][1]) < parseInt(respinIndicadores[i].VALOR)){
                topkpi[j][0] = respinIndicadores[i].INDICADOR
                topkpi[j][1] = respinIndicadores[i].VALOR
              }
              
            }
          }
          if(door){
            if(topkpi[4] === 0){
              for(var l = 0; l < topkpi.length; l++){
                if(topkpi[l] === 0){
                  topkpi[l] = [respinIndicadores[i].INDICADOR, respinIndicadores[i].VALOR]
                  break;
                }
              }
            }else{
              let min = 0
              for(var l = 1; l < topkpi.length; l++){
                if(parseInt(topkpi[l][1]) < parseInt(topkpi[min][1])){
                  min = l
                }
              }
              if(parseInt(topkpi[min][1]) < parseInt(respinIndicadores[i].VALOR)){
                topkpi[min][0] = respinIndicadores[i].INDICADOR
                topkpi[min][1] = respinIndicadores[i].VALOR
              }
            }
          }
        }

        for(var i = 0; i < respostas.length; i++){
          let valorLista = respostas[i].RESPOSTA.split(";")
          let valor = valorLista[1]
          if(respostas[i].TEXTOTERMO.includes("clientes")){
            if(respostas[i].TEXTOTERMO.includes("CONFIABILIDADE")){
              dados[0][0] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("CUSTO")){
              dados[1][0] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("QUALIDADE")){
              dados[2][0] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("INOVAÇÃO")){
              dados[3][0] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("VELOCIDADE")){
              dados[4][0] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("FLEXIBILIDADE")){
              dados[5][0] = valor;
            }
          }else{
            if(respostas[i].TEXTOTERMO.includes("CONFIABILIDADE")){
              dados[0][1] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("CUSTO")){
              dados[1][1] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("QUALIDADE")){
              dados[2][1] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("INOVAÇÃO")){
              dados[3][1] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("VELOCIDADE")){
              dados[4][1] = valor;
            }else if(respostas[i].TEXTOTERMO.includes("FLEXIBILIDADE")){
              dados[5][1] = valor;
            }
          }
        }
      }
      
      const projects = await ModelProjetos.findAll({
        where:{
          IDEMP: req.query.company
        }
      })
      res.render("Screens/benchCompany", {
        user: req.cookies.user,
        company: req.query.company,
        name: req.cookies.user.nome,
        papelName: req.cookies.user.papelName,
        empresaName: req.cookies.user.empresaName,
        empresaClient: empresa[0].toJSON().EM_NOME,
        linguas: req.cookies.user.linguas,
        dados,
        projects,
        topkpi
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerBenchCompany };
