import { ModelClassetermos } from "../../models/classetermos.js";
import { ModelEscalas } from "../../models/escalas.js";
import { ModelFontecombos } from "../../models/fontecombos.js";
import { ModelItemescalas } from "../../models/itemescalas.js";
import { ModelObjetivos } from "../../models/objetivos.js";
import { ModelPadraoentrevista } from "../../models/padraoentrevista.js";
import { ModelRespentrevista } from "../../models/respentrevista.js";
import { ModelTiposentradas } from "../../models/tipoesentradas.js";
import { ModelVersions } from "../../models/versions.js";

var controlerPadraentrevistaWorkshopCreate = async (req, res) => {
  try {
    console.log(req.body)
    let version = await ModelVersions.findAll({
      where:{
        ATIVA:1  
      }
    })
    let classe = await ModelClassetermos.findAll({
      where:{
        CLASSE:req.body.IDCLASS
      } 
    })
    let obj = await ModelObjetivos.findAll({
      where:{
        DESCRICAO:req.body.IDOBJ
      }
    })
    let entrada = await ModelTiposentradas.findAll({
      where:{
        TIPOS:req.body.IDTIPOENTRADA
      }
    })
    let combo = await ModelFontecombos.findAll({
      where:{
        FONTE:req.body.COMBOSOURCE
      }
    })
    let escalas = await ModelEscalas.findAll({
      where:{
        DESCRICAO:req.body.IDESCALA
      }
    })
    let itemEscalas = await ModelItemescalas.count({
      where:{
        IDESCALA:escalas[0].toJSON().ID
      }
    })
    console.log(combo[0].toJSON().ID)

    let entrevistaTable = await ModelPadraoentrevista.findAll({
      where:{
        IDOPER: req.body.IDOPER,
        IDTAREFA: req.body.IDTAREFA,
        IDATIV: req.body.IDACTIV,
        SEQUENCIA: parseInt(req.body.SEQUENCIA)
      }
    })
    let entrevistaTemp = parseInt(req.body.SEQUENCIA)
    while(true){
      if(entrevistaTable[0] == undefined){
        break;
      }else{
        entrevistaTemp++
        entrevistaTable = await ModelPadraoentrevista.findAll({
          where:{
            IDOPER: req.body.IDOPER,
            IDTAREFA: req.body.IDTAREFA,
            IDATIV: req.body.IDACTIV,
            SEQUENCIA: parseInt(entrevistaTemp)
          }
        })
      }
    }
    let arquivo = ""
    let nameArquivo = ""
    let typeArquivo = ""
    if(req.file !== undefined){
      arquivo = req.file.filename;
      nameArquivo = req.file.originalname;
      typeArquivo = ((req.file.mimetype).split("/"))[0]
    }
    
    const create = await ModelPadraoentrevista.create({
      IDVERSAO: version[0].toJSON().ID,
      IDOPER: req.body.IDOPER,
      IDTAREFA: req.body.IDTAREFA,
      IDATIV: req.body.IDACTIV,
      TEXTO: req.body.TEXTO,
      SEQUENCIA: entrevistaTemp,
      IDCLASS: classe[0].toJSON().ID,
      IDOBJ: obj[0].toJSON().ID,
      FLGINOUT: req.body.FLGINOUT,
      IDTIPOENTRADA: entrada[0].toJSON().ID,
      FLAGMETA: req.body.FLAGMETA,
      FLAGREAL: req.body.FLAGREAL,
      FLAGOBJETIVO: req.body.FLAGOBJETIVO,
      COMBOSOURCE: combo[0].toJSON().ID,
      SLIDERMIN: 1,
      SLIDERMAX: itemEscalas,
      FILESOURCE: arquivo,
      FILENAME: nameArquivo,
      FILETYPE: typeArquivo,
      IDESCALA: escalas[0].toJSON().ID,
      GRUPO: req.body.GRUPO,
      TOOLTIP: "",
    });
    
    res.render("Screens/forms", { texto: "Entrevista criada com sucesso", page:"/workshop" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerPadraentrevistaWorkshopEdit = async (req, res) => {
  try {
    let version = await ModelVersions.findAll({
      where:{
        ATIVA:1  
      }
    })
    let classe = await ModelClassetermos.findAll({
      where:{
        CLASSE:req.body.IDCLASS
      } 
    })
    let obj = await ModelObjetivos.findAll({
      where:{
        DESCRICAO:req.body.IDOBJ
      }
    })
    let entrada = await ModelTiposentradas.findAll({
      where:{
        TIPOS:req.body.IDTIPOENTRADA
      }
    })
    let combo = await ModelFontecombos.findAll({
      where:{
        FONTE:req.body.COMBOSOURCE
      }
    })
    let escalas = await ModelEscalas.findAll({
      where:{
        DESCRICAO:req.body.IDESCALA
      }
    })
    let itemEscalas = await ModelItemescalas.count({
      where:{
        IDESCALA:escalas[0].toJSON().ID
      }
    })

    let entrevistaTable = await ModelPadraoentrevista.findAll({
      where:{
        IDOPER: req.body.IDOPER,
        IDTAREFA: req.body.IDTAREFA,
        IDATIV: req.body.IDACTIV,
        SEQUENCIA: parseInt(req.body.SEQUENCIA)
      }
    })
    let entrevistaTemp = parseInt(req.body.SEQUENCIA)
    while(true){
      if(entrevistaTable[0] == undefined || entrevistaTable[0].toJSON().ID == req.body.ID){
        break;
      }else{
        entrevistaTemp++
        entrevistaTable = await ModelPadraoentrevista.findAll({
          where:{
            IDOPER: req.body.IDOPER,
            IDTAREFA: req.body.IDTAREFA,
            IDATIV: req.body.IDACTIV,
            SEQUENCIA: parseInt(entrevistaTemp)
          }
        })
      }
    }

    const oldPD = await ModelPadraoentrevista.findAll({
      where:{
        ID:req.body.ID
      }
    })

    const findRespota = await ModelRespentrevista.findAll({
      where:{
        TEXTOTERMO: oldPD[0].TEXTO
      }
    })

    let arquivo = ""
    let nameArquivo = ""
    let typeArquivo = ""
    if(req.file !== undefined){
      arquivo = req.file.filename;
      nameArquivo = req.file.originalname;
      typeArquivo = ((req.file.mimetype).split("/"))[0]
    }

    const update = await ModelPadraoentrevista.update({
      IDVERSAO: version[0].toJSON().ID,
      IDOPER: req.body.IDOPER,
      IDTAREFA: req.body.IDTAREFA,
      IDATIV: req.body.IDACTIV,
      TEXTO: req.body.TEXTO,
      SEQUENCIA: entrevistaTemp,
      IDCLASS: classe[0].toJSON().ID,
      IDOBJ: obj[0].toJSON().ID,
      FLGINOUT: req.body.FLGINOUT,
      IDTIPOENTRADA: entrada[0].toJSON().ID,
      FLAGMETA: req.body.FLAGMETA,
      FLAGREAL: req.body.FLAGREAL,
      FLAGOBJETIVO: req.body.FLAGOBJETIVO,
      COMBOSOURCE: combo[0].toJSON().ID,
      SLIDERMIN: 1,
      SLIDERMAX: itemEscalas,
      FILESOURCE: arquivo,
      FILENAME: nameArquivo,
      FILETYPE: typeArquivo,
      IDESCALA: escalas[0].toJSON().ID,
      GRUPO: req.body.GRUPO,
      TOOLTIP: "",
    },{
      where:{
        ID:req.body.ID
      }
    });
    if(findRespota[0] != undefined){
      const updateRespota = await ModelRespentrevista.update({
        TEXTOTERMO:req.body.TEXTO,
      },{
        where:{
          ID:findRespota[0].ID
        }
      })
    }
    res.render("Screens/forms", { texto: "Entrevista editada com sucesso", page:"/workshop" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerPadraentrevistaWorkshopDelete = async (req, res) => {
  try {
    const destroy = await ModelPadraoentrevista.destroy({
      where: {
        ID: req.body.ID,
      },
    });
    res.render("Screens/forms", { texto: "Entrevista deletada com sucesso", page:"/workshop" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerPadraentrevistaWorkshopCreate,
  controlerPadraentrevistaWorkshopEdit,
  controlerPadraentrevistaWorkshopDelete,
};
