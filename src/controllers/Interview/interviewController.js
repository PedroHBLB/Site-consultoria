import { ModelAtividades } from "../../models/atividades.js";
import { ModelOperacional } from "../../models/operacional.js";
import { ModelPadraoentrevista } from "../../models/padraoentrevista.js";
import { ModelItemescalas } from "../../models/itemescalas.js";
import { ModelEscalas } from "../../models/escalas.js";
import { ModelFontecombos } from "../../models/fontecombos.js";
import { ModelIndicadores } from "../../models/indicadores.js";
import { ModelRegentrevista } from "../../models/regentrevista.js";
import { ModelRespentrevista } from "../../models/respentrevista.js";
import { ModelIndicadorescombo } from "../../models/indicadorescombos.js";
import { ModelRespindentrevista } from "../../models/respindentrevista.js";
import { ModelSchedule } from "../../models/schedule.js";
import { ModelEmpresa } from "../../models/empresa.js";
import { ModelDocumentos } from "../../models/documentos.js";
import { ModelAnotacoes } from "../../models/anotacoes.js";
import { ModelProjetos } from "../../models/projetos.js";
import { ModelDescricao } from "../../models/descricao.js";
import { ModelObjProjetos } from "../../models/objetivosprojetos.js";
import { ModelEstadoatual } from "../../models/estadoatual.js";
import { ModelEstadometa } from "../../models/estadometa.js";

var controlerInterview = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {

      let ativLista = [];
      let entrevistaLista = [];
      let ItemLista = [];
      let ComboLista = [];
      let allFonte = [];
      let indicadores = []
      let respostasLista = []
      let aux = [];

      let operTable = await ModelOperacional.findAll({
        where: {
          ID: req.body.IDOPER,
        },
      });

      let ativTable = await ModelAtividades.findAll({
        where: {
          IDOPER: req.body.IDOPER,
          IDTAREFA: req.body.IDTAREFA,
        },
      });

      ativTable.forEach((ativ) => {
        ativLista.push(ativ.toJSON());
      });

      for (var j = 0; j < ativLista.length; j++) {
        for (var l = 0; l < ativLista.length; l++) {
          if (ativLista[j].SEQUENCIA < ativLista[l].SEQUENCIA) {
            aux = ativLista[l];
            ativLista[l] = ativLista[j];
            ativLista[j] = aux;
          }
        }
      }

      let entrevistaTable = await ModelPadraoentrevista.findAll({
        Where: {
          IDOPER: req.body.IDOPER,
          IDTAREFA: req.body.IDTAREFA,
        },
      });
      entrevistaTable.forEach((entrevista) => {
        entrevistaLista.push(entrevista.toJSON());
      });
      for (var j = 0; j < entrevistaLista.length; j++) {
        for (var l = 0; l < entrevistaLista.length; l++) {
          if (parseInt(entrevistaLista[j].SEQUENCIA) < parseInt(entrevistaLista[l].SEQUENCIA)) {
            aux = entrevistaLista[l];
            entrevistaLista[l] = entrevistaLista[j];
            entrevistaLista[j] = aux;
          }
        }
      }


      let ItemListaTemp = [];
      let itemEscalasTable = await ModelItemescalas.findAll();
      for (var i = 0; i < itemEscalasTable.length; i++) {
        ItemListaTemp.push(itemEscalasTable[i].toJSON());
      }

      let escalas = await ModelEscalas.findAll();
      escalas.forEach((escala) => {
        let escalaTemp = escala.toJSON();
        let aux = [];
        aux.push(escalaTemp.ID);
        for (var i = 0; i < ItemListaTemp.length; i++) {
          if (ItemListaTemp[i].IDESCALA == escalaTemp.ID) {
            aux.push([ItemListaTemp[i].DESCRICAO+";"+ItemListaTemp[i].VALOR]);
          }
        }
        ItemLista.push(aux);
      });
  
      let fonteComboTable = await ModelFontecombos.findAll();
      for (var i = 0; i < fonteComboTable.length; i++) {
        ComboLista.push([fonteComboTable[i].toJSON().FONTE, fonteComboTable[i].toJSON().TEXTO]);
      }
      for (var i = 1; i < fonteComboTable.length; i++) {
        if(fonteComboTable[i].toJSON().FONTE != fonteComboTable[i-1].toJSON().FONTE){
          allFonte.push([fonteComboTable[i].toJSON().FONTE, fonteComboTable[i].toJSON().ID]);
        }
      }

      let indicadoresLista = await ModelIndicadores.findAll();
      for (var i = 0; i < indicadoresLista.length; i++) {
        indicadores.push(indicadoresLista[i].toJSON().DESCRICAO);
      }

      let regentrevistaTable = await ModelRegentrevista.findAll({
        where:{
          IDSCH: req.body.IDSCH
        }
      })
  

      let respentrevistaTable = await ModelRespentrevista.findAll({
        where:{
          IDSCH:req.body.IDSCH
        }
      })
      
      respentrevistaTable.forEach((resposta) => {
        respostasLista.push(resposta.toJSON());
      });
      
      
      let indicadoresCombo = await ModelIndicadorescombo.findAll();
      
      let respindentrevista = await ModelRespindentrevista.findAll();
      
      let imagens = {
        1: "Operational/kick.png",
        2: "Operational/align.png",
        3: "Operational/today.png",
        4: "Operational/diag.png",
        5: "Operational/recom.png",
        6: "Operational/action.png",
        7: "Operational/close.png",
      };

      let oper = operTable[0].toJSON().DESCRICAO;
      let img = imagens[parseInt(operTable[0].toJSON().ID)];
      let color = req.body.name_oper;
      let task = req.body.task;
      let dp = req.body.dp;
      let dtr = req.body.dtr;
      let user = req.cookies.user;
    
      let status = 0
      if(req.body.Status == "Não Iniciado"){
        status = 0
      }else if(req.body.Status == "Iniciado"){
        status = 1
      }else if(req.body.Status == "Encerrado"){
        status = 2
      }

      if(status == 0){
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth()+1
        let year = today.getFullYear()
        const scheduleTable = await ModelSchedule.update({
          DTINIC: year+"-"+month+"-"+day,
          STATUS: 1,
        },{
          where:{
            ID: req.body.IDSCH
          }
        })
      }

      const agenda = await ModelSchedule.findAll({
        where:{
          ID:req.body.IDSCH
        }
      })
      const empresa = await ModelEmpresa.findAll({
        where:{
          ID:agenda[0].toJSON().IDEMP
        }
      })
      let projetos = await ModelProjetos.findAll({
        where:{
          IDEMP:agenda[0].toJSON().IDEMP,
          IDOPER: agenda[0].toJSON().IDOPER,
          IDTAREFA:agenda[0].toJSON().IDTAREFA,
        }
      })
      const document = await ModelDocumentos.findAll({
        where:{
          IDEMP:agenda[0].toJSON().IDEMP,
          IDOPER:agenda[0].toJSON().IDOPER,
          IDTAREFA:agenda[0].toJSON().IDTAREFA,
        }
      })
      const annotation = await ModelAnotacoes.findAll({
        where:{
          IDEMP:agenda[0].toJSON().IDEMP,
          IDOPER:agenda[0].toJSON().IDOPER,
          IDTAREFA:agenda[0].toJSON().IDTAREFA,
        }
      })
      const descricao = await ModelDescricao.findAll()
      const objetivo = await ModelObjProjetos.findAll()
      const estadoatual = await ModelEstadoatual.findAll()
      const estadometa = await ModelEstadometa.findAll()
      console.log(req.body.IDSCH)
      console.log(regentrevistaTable[0].toJSON().ID)
      res.render("Screens/interview", {
        user,
        flagExercice: [oper, img, color, task],
        data: [dp, dtr],
        atividades: ativLista,
        entrevistas: entrevistaLista,
        itensEscalas: ItemLista,
        itensCombo: ComboLista,
        allFonte,
        indicadores,
        idregen: req.body.IDSCH,
        respen: respostasLista,
        indicadoresCombo,
        respind: respindentrevista,
        status: status,
        schedule: agenda[0].toJSON(),
        empresa: empresa[0].EM_NOME,
        documents: document,
        anotacoes: annotation,
        resend:JSON.stringify(req.body).replaceAll(" ","["),
        projetos,
        descricao,
        objetivo,
        estadoatual,
        estadometa
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerInterview };
