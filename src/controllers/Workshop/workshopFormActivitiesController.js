import { ModelAtividades } from "../../models/atividades.js";

var controlerActivitiesWorkshopCreate = async (req, res) => {
  try {

    let sequenciaTable = await ModelAtividades.findAll({
      where:{
        IDOPER: req.body.IDOPER,
        IDTAREFA: req.body.IDTAREFA,
        SEQUENCIA: parseInt(req.body.SEQUENCIA)
      }
    })
    let sequenciaTemp = parseInt(req.body.SEQUENCIA)
    while(true){
      if(sequenciaTable[0] == undefined){
        break;
      }else{
        sequenciaTemp++
        sequenciaTable = await ModelAtividades.findAll({
          where:{
            IDOPER: req.body.IDOPER,
            IDTAREFA: req.body.IDTAREFA,
            SEQUENCIA: parseInt(sequenciaTemp)
          }
        })
      }
    }
    const create = await ModelAtividades.create({
      IDOPER: req.body.IDOPER,
      IDTAREFA: req.body.IDTAREFA,
      INDIVIDGRUPO: req.body.INDIVIDGRUPO,
      DESCRICAO: req.body.DESCRICAO,
      INCLUIREGISTRO: req.body.INCLUIREGISTRO,
      SEQUENCIA: sequenciaTemp,
      TOOLTIP: req.body.TOOLTIP,
    });
    res.render("Screens/forms", { texto: "Atividade criada com sucesso", page:"/workshop" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerActivitiesWorkshopEdit = async (req, res) => {
  try {
    let sequenciaTable = await ModelAtividades.findAll({
      where:{
        IDOPER: req.body.IDOPER,
        IDTAREFA: req.body.IDTAREFA,
        SEQUENCIA: parseInt(req.body.SEQUENCIA)
      }
    })
    let sequenciaTemp = parseInt(req.body.SEQUENCIA)
    while(true){
      if(sequenciaTable[0] == undefined || sequenciaTable[0].toJSON().ID == req.body.ID){
        break;
      }else{
        sequenciaTemp++
        sequenciaTable = await ModelAtividades.findAll({
          where:{
            IDOPER: req.body.IDOPER,
            IDTAREFA: req.body.IDTAREFA,
            SEQUENCIA: parseInt(sequenciaTemp)
          }
        })
      }
    }
    const update = await ModelAtividades.update(
      {
        IDOPER: req.body.IDOPER,
        IDTAREFA: req.body.IDTAREFA,
        INDIVIDGRUPO: req.body.INDIVIDGRUPO,
        DESCRICAO: req.body.DESCRICAO,
        INCLUIREGISTRO: req.body.INCLUIREGISTRO,
        SEQUENCIA: sequenciaTemp,
        TOOLTIP: req.body.TOOLTIP,
      },
      {
        where: {
          ID: req.body.ID,
        },
      }
    );
    res.render("Screens/forms", { texto: "Atividade editada com sucesso", page:"/workshop" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerActivitiesWorkshopDelete = async (req, res) => {
  try {
    const destroy = await ModelAtividades.destroy({
      where: {
        ID: req.body.ID,
      },
    });
    res.render("Screens/forms", { texto: "Atividade deletada com sucesso", page:"/workshop" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerActivitiesWorkshopCreate,
  controlerActivitiesWorkshopEdit,
  controlerActivitiesWorkshopDelete,
};
