import { ModelPadraoentrevista } from "../../models/padraoentrevista.js";
import { ModelProjetos } from "../../models/projetos.js";
import { ModelRegentrevista } from "../../models/regentrevista.js";
import { ModelRespentrevista } from "../../models/respentrevista.js";
import { ModelRespindentrevista } from "../../models/respindentrevista.js";
import { ModelSchedule } from "../../models/schedule.js";

var controlerRespentrevista = async (req, res)=>{
    try {
        if (req.cookies.user.email === "") {
          res.status(403).json({
            error: "Login Invalido",
          });
        } else {
            let today = new Date()
            let respostas = Object.values(req.body)
            let indicadores = []
            let idPD = []
            let comboIndicadores = []
            for(var i = 0; i < respostas.length;i++){
                let respTemp = respostas[i].split(",");
                let respostaJson
                if(respTemp[0] != "Encerra" && respTemp[0] != "Salva"){
                    respostaJson = JSON.parse(respostas[i])
                }
                if(respostaJson != undefined && respostaJson.TYPE === "normal"){
                    let RegentrevistaTable = await ModelRespentrevista.findAll({
                        where:{
                            IDSCH:respostaJson.IDREGENT,
                            IDVERSAO:respostaJson.IDVERSAO,
                            IDOPER:respostaJson.IDOPER,
                            IDTAREFA:respostaJson.IDTAREFA,
                            IDATIV:respostaJson.IDATIV,
                            TEXTOTERMO:respostaJson.TEXTOTERMO,
                            GRUPO: respostaJson.GRUPO
                        }
                    })
                    if(RegentrevistaTable.length === 0){
                        if(respostaJson.IDTIPOENTRADA === "14"){

                            let regenProject = await ModelRegentrevista.findAll({
                                where:{
                                    ID: respostaJson.IDREGENT
                                }
                            })

                            let respostaListaProject = respostaJson.RESPOSTA.split(";");

                            let create = await ModelProjetos.create({
                                IDEMP: regenProject[0].IDEMP,
                                IDOPER:respostaJson.IDOPER,
                                IDTAREFA:respostaJson.IDTAREFA,
                                NOME:respostaListaProject[0],
                                DESCRICAO:respostaListaProject[1],
                                OBJETIVO: respostaListaProject[2],
                                ESTADOATUAL:respostaListaProject[3],
                                ESTADOMETA:respostaListaProject[4],
                                PESSOAS:respostaListaProject[5],
                                EQUIPAMENTOS:respostaListaProject[6],
                                PROCESSO:respostaListaProject[7],
                                MONITORAMENTO:respostaListaProject[8],
                                TECNOLOGIA:respostaListaProject[9],
                                INDUSTRIA:respostaListaProject[10],
                                TEXTPESSOAS : "",
                                TEXTEQUIPAMENTOS : "",
                                TEXTPROCESSO : "",
                                TEXTMONITORAMENTO : "",
                                TEXTTECNOLOGIA : "",
                                TEXTINDUSTRIA : ""   
                            })
                        }else{
                            let create = await ModelRespentrevista.create({
                                IDSCH:respostaJson.IDREGENT,
                                IDVERSAO:respostaJson.IDVERSAO,
                                IDOPER:respostaJson.IDOPER,
                                IDTAREFA:respostaJson.IDTAREFA,
                                IDATIV:respostaJson.IDATIV,
                                IDTIPOENTRADA: respostaJson.IDTIPOENTRADA,
                                TEXTOTERMO:respostaJson.TEXTOTERMO,
                                RESPOSTA:respostaJson.RESPOSTA,
                                RESPMETA:respostaJson.META,
                                RESPREAL:respostaJson.REAL,
                                RESPOBJETIVO:respostaJson.OBJ,
                                GRUPO: respostaJson.GRUPO,
                                IDPADRAOENTREVISTA: respostaJson.IDPADRAOENTREVISTA,
                                YEAR: today.getFullYear()
                            })
                        }
                    }else{
                        let update = await ModelRespentrevista.update({
                            IDSCH:respostaJson.IDREGENT,
                            IDVERSAO:respostaJson.IDVERSAO,
                            IDOPER:respostaJson.IDOPER,
                            IDTAREFA:respostaJson.IDTAREFA,
                            IDATIV:respostaJson.IDATIV,
                            IDTIPOENTRADA:respostaJson.IDTIPOENTRADA,
                            TEXTOTERMO:respostaJson.TEXTOTERMO,
                            RESPOSTA:respostaJson.RESPOSTA,
                            RESPMETA:respostaJson.META,
                            RESPREAL:respostaJson.REAL,
                            RESPOBJETIVO:respostaJson.OBJ,
                            GRUPO: respostaJson.GRUPO,
                            IDPADRAOENTREVISTA: respostaJson.IDPADRAOENTREVISTA
                        },{
                            where:{
                                ID:RegentrevistaTable[0].toJSON().ID
                            }
                        })
                        let idregenTemp = RegentrevistaTable[0].toJSON().ID

                        if(RegentrevistaTable[0].IDTIPOENTRADA === "10"){
                            let PDtable = await ModelPadraoentrevista.findAll({
                                where:{
                                    TEXTO:respostaJson.TEXTOTERMO
                                }
                            })
                            comboIndicadores.push([PDtable[0].ID, respostaJson.RESPOSTA, respostaJson.GRUPO, idregenTemp])
                        }
                    }
                }else if(respostaJson != undefined && respostaJson.TYPE == "indicador"){
                    let respindentrevista = await ModelRespindentrevista.findAll({
                        where:{
                            IDPADRAOENTREVISTA:respostaJson.IDPADRAOENTREVISTA,
                            NUMINDICADOR:respostaJson.NUMINDICADOR,
                            IDRESPENTREVISTA: respostaJson.IDRESPEN
                        }
                    })

                    let respostaLista = respostaJson.RESPOSTA.split(";");
                    for(var j=0; j <respostaLista.length;j++){
                        respostaLista[j] = respostaLista[j].trim();
                    }

                    indicadores.push([respostaJson.IDPADRAOENTREVISTA, respostaJson.NUMINDICADOR, respostaJson.GRUPO, respostaJson.IDRESPEN])
                        if(!idPD.includes(respostaJson.IDPADRAOENTREVISTA)){
                            idPD.push(respostaJson.IDPADRAOENTREVISTA)
                        }
                    if(respindentrevista.length === 0){
                        let num1 = parseInt(respostaLista[6].split('-')[0])
                        let num2 = parseInt(respostaLista[8].split('-')[0],)
                        let num3 = parseInt(respostaLista[10].split('-')[0])
                        let create = await ModelRespindentrevista.create({
                            IDPADRAOENTREVISTA:respostaJson.IDPADRAOENTREVISTA,
                            INDICADOR:respostaJson.INDICADOR,
                            IDTIPOENTRADA: 11,
                            OBJETIVO: respostaLista[0],
                            META: respostaLista[1],
                            REAL: respostaLista[2],
                            OBJ: respostaLista[3],
                            BARREIRA: respostaLista[4],
                            EFEITOBARREIRA: respostaLista[5],
                            SEVERIDADE: num1,
                            CAUSA: respostaLista[7],
                            OCORRENCIA: num2,
                            CONTROLES: respostaLista[9],
                            DETECCAO: num3,
                            NUMINDICADOR: respostaJson.NUMINDICADOR,
                            GRUPO: respostaJson.GRUPO,
                            IDRESPENTREVISTA: respostaJson.IDRESPEN,
                            VALOR:num1*num2*num3,
                            YEAR: today.getFullYear()
                        })
                    }else{
                        let num1 = parseInt(respostaLista[6].split('-')[0])
                        let num2 = parseInt(respostaLista[8].split('-')[0],)
                        let num3 = parseInt(respostaLista[10].split('-')[0])
                        let update = await ModelRespindentrevista.update({
                            IDPADRAOENTREVISTA:respostaJson.IDPADRAOENTREVISTA,
                            INDICADOR:respostaJson.INDICADOR,
                            IDTIPOENTRADA: 11,
                            OBJETIVO: respostaLista[0],
                            META: respostaLista[1],
                            REAL: respostaLista[2],
                            OBJ: respostaLista[3],
                            BARREIRA: respostaLista[4],
                            EFEITOBARREIRA: respostaLista[5],
                            SEVERIDADE: num1,
                            CAUSA: respostaLista[7],
                            OCORRENCIA: num2,
                            CONTROLES: respostaLista[9],
                            DETECCAO: num3,
                            NUMINDICADOR: respostaJson.NUMINDICADOR,
                            GRUPO: respostaJson.GRUPO,
                            IDRESPENTREVISTA: respostaJson.IDRESPEN,
                            VALOR: num1*num2*num3
                            
                        },{
                            where:{
                                ID:respindentrevista[0].toJSON().ID
                            }
                        })
                    }
                }else if(respostaJson != undefined && respostaJson.TYPE == "vazio"){
                    ModelRespindentrevista.destroy({
                        where:{
                            IDPADRAOENTREVISTA:respostaJson.IDPADRAOENTREVISTA,
                            IDRESPENTREVISTA: respostaJson.IDRESPEN,
                            GRUPO: respostaJson.GRUPO
                        }
                    })
                }else if(respostaJson != undefined && respostaJson.TYPE == "projeto"){
                    if(respostaJson.MODE === "config"){
                        let del = respostaJson.RESPOSTA.split(';')[1]
                        if(del === "true"){
                            let destroy = await ModelProjetos.destroy({
                                where:{
                                    ID: respostaJson.IDPROJETO
                                }
                            })
                        }else{
                            let update = await ModelProjetos.update({
                                NOME: respostaJson.RESPOSTA.split(';')[0]
                            },{
                                where:{
                                    ID: respostaJson.IDPROJETO
                                }
                            })
                        }
                    }else if(respostaJson.MODE === "descricao"){
                        let update = await ModelProjetos.update({
                            DESCRICAO: respostaJson.RESPOSTA
                        },{
                            where:{
                                ID: respostaJson.IDPROJETO
                            }
                        })
                    }else if(respostaJson.MODE === "objetivo"){
                        let update = await ModelProjetos.update({
                            OBJETIVO: respostaJson.RESPOSTA
                        },{
                            where:{
                                ID: respostaJson.IDPROJETO
                            }
                        })
                    }else if(respostaJson.MODE === "estadoatual"){
                        let update = await ModelProjetos.update({
                            ESTADOATUAL: respostaJson.RESPOSTA
                        },{
                            where:{
                                ID: respostaJson.IDPROJETO
                            }
                        })
                    }else if(respostaJson.MODE === "estadometa"){
                        let update = await ModelProjetos.update({
                            ESTADOMETA: respostaJson.RESPOSTA
                        },{
                            where:{
                                ID: respostaJson.IDPROJETO
                            }
                        })
                    }else if(respostaJson.MODE === "analise"){
                        let analisesType = respostaJson.RESPOSTA.split("!")
                        let resultado = [0,0,0,0,0,0]
                        let respAnalise = ["","","","","",""]
                        for(var a = 0; a < analisesType.length; a++){
                            let analisesRespostas = analisesType[a].split(";")
                            if(analisesRespostas[0] === "true"){
                                resultado[a] = 1
                                for(var ar = 1; ar < analisesRespostas.length; ar++){
                                    respAnalise[a] += analisesRespostas[ar]
                                    if(ar+1 != analisesRespostas.length){
                                        respAnalise[a] += ";"
                                    }
                                }
                            }
                        }
                        
                        let update = await ModelProjetos.update({
                            PESSOAS: resultado[0],
                            EQUIPAMENTOS: resultado[1],
                            PROCESSO: resultado[2],
                            MONITORAMENTO: resultado[3],
                            TECNOLOGIA: resultado[4],
                            INDUSTRIA: resultado[5],
                            TEXTPESSOAS: respAnalise[0],
                            TEXTEQUIPAMENTOS: respAnalise[1],
                            TEXTPROCESSO: respAnalise[2],
                            TEXTMONITORAMENTO: respAnalise[3],
                            TEXTTECNOLOGIA: respAnalise[4],
                            TEXTINDUSTRIA: respAnalise[5],

                        },{
                            where:{
                                ID: respostaJson.IDPROJETO
                            }
                        })
                    }
                }else{
                    if(respTemp[0] == "Encerra"){
                        let today = new Date()
                        let day = today.getDate()
                        let month = today.getMonth()+1
                        let year = today.getFullYear()
                        const regenTable = await ModelRegentrevista.findAll({
                            where:{
                                ID:respTemp[1]
                            }
                        })

                        const schTable = await ModelSchedule.update({
                            DREXEC: year+"-"+month+"-"+day,
                            STATUS: 2
                        },{
                            where:{
                                ID:regenTable[0].IDSCH
                            }
                        })
                    }else if(respostas[i] == "Salva"){
                    }
                }
            }
            
            if(indicadores.length > 0){
                for(var j=0; j < idPD.length;j++){
                    let respindentrevista = await ModelRespindentrevista.findAll({
                        where:{
                            IDPADRAOENTREVISTA:idPD[j],
                        }
                    })
                    for(var l=0; l < respindentrevista.length;l++){
                        let key = true
                        for(var m = 0; m < indicadores.length;m++){
                            if(indicadores[m][3] == respindentrevista[l].IDRESPENTREVISTA){
                                if(indicadores[m][1] == respindentrevista[l].NUMINDICADOR  && indicadores[m][2] == respindentrevista[l].GRUPO){
                                    key = false
                                }
                            }else{
                                key = false
                            }
                        }
                        if(key){
                            let destroy = await ModelRespindentrevista.destroy({
                                where:{
                                    IDPADRAOENTREVISTA:idPD[j],
                                    NUMINDICADOR:respindentrevista[l].NUMINDICADOR,
                                    GRUPO:respindentrevista[l].GRUPO,
                                    IDRESPENTREVISTA:respindentrevista[l].IDRESPENTREVISTA
                                }
                            })
                        }
                    }
                }
            }
            if(comboIndicadores.length > 0){
                for(var j=0; j < comboIndicadores.length;j++){
                    let respindentrevistaTemp = await ModelRespindentrevista.findAll({
                        where:{
                            IDPADRAOENTREVISTA:comboIndicadores[j][0],
                            GRUPO:comboIndicadores[j][2],
                            IDRESPENTREVISTA: comboIndicadores[j][3]
                        }
                    })
                    let resp = comboIndicadores[j][1].split(";")
                    for(var l=0; l < respindentrevistaTemp.length;l++){
                        let key = true
                        for(var m=0; m < resp.length;m++){
                            if(respindentrevistaTemp[l].INDICADOR == resp[m]){
                                key = false;
                            }
                        }
                        if(key){
                            let destroy = await ModelRespindentrevista.destroy({
                                where:{
                                    IDPADRAOENTREVISTA:comboIndicadores[j][0],
                                    INDICADOR:respindentrevistaTemp[l].INDICADOR,
                                    GRUPO: respindentrevistaTemp[l].GRUPO
                                }
                            })
                        }
                    }

                }
            }

            res.render("Screens/respentrevista");
        }
          
      } catch (error) {
        console.log("Erro: " + error);
      }
}

export { controlerRespentrevista }