import { ModelConsultoria } from "../../models/consultoria.js";

var controlerInfoConsultancyCreate = async (req, res) => {
  try {
    let rob = 0;
    if (req.body.CS_IDROB === "Microempresa") {
      rob = 1;
    } else if (req.body.CS_IDROB === "Pequena empresa") {
      rob = 2;
    } else if (req.body.CS_IDROB === "Média empresa") {
      rob = 3;
    } else if (req.body.CS_IDROB === "Grande empresa") {
      rob = 4;
    }

    const create = await ModelConsultoria.create({
      CONSULTORIA: req.body.CONSULTORIA,
      CS_IDROB: rob,
      CS_CNPJ: req.body.CS_CNPJ,
      CS_TELCONS: req.body.CS_TELCONS,
      CS_WEBPAGE: req.body.CS_WEBPAGE,
      CS_NOME: req.body.CS_NOME,
      CS_CARGO: req.body.CS_CARGO,
      CS_TELRESP: req.body.CS_TELRESP,
      CS_EMAIL: req.body.CS_EMAIL,
      CS_END: req.body.CS_END,
      CS_NUM: req.body.CS_NUM,
      CS_CMPL: req.body.CS_CMPL,
      CS_BAIR: req.body.CS_BAIR,
      CS_MUNI: req.body.CS_MUNI,
      CS_ESTADO: req.body.CS_ESTADO,
      CS_PAIS: req.body.CS_PAIS,
      CS_CEP: req.body.CS_CEP,
      ARQUIVOCONS: req.body.ARQUIVOCONS,
      FLGVIDEO: req.body.presentation,
      FLGATIVA: req.body.status_info,
      CS_APELIDO: req.body.CS_APELIDO,
    });
    res.render("Screens/forms", { texto: "Consultoria criada com sucesso", page:"/consultancy"});
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerInfoConsultancyEdit = async (req, res) => {
  try {
    let rob = 0;
    if (req.body.CS_IDROB === "Microempresa") {
      rob = 1;
    } else if (req.body.CS_IDROB === "Pequena empresa") {
      rob = 2;
    } else if (req.body.CS_IDROB === "Média empresa") {
      rob = 3;
    } else if (req.body.CS_IDROB === "Grande empresa") {
      rob = 4;
    }
    const update = await ModelConsultoria.update({
      CONSULTORIA: req.body.CONSULTORIA,
      CS_IDROB: rob,
      CS_CNPJ: req.body.CS_CNPJ,
      CS_TELCONS: req.body.CS_TELCONS,
      CS_WEBPAGE: req.body.CS_WEBPAGE,
      CS_NOME: req.body.CS_NOME,
      CS_CARGO: req.body.CS_CARGO,
      CS_TELRESP: req.body.CS_TELRESP,
      CS_EMAIL: req.body.CS_EMAIL,
      CS_END: req.body.CS_END,
      CS_NUM: req.body.CS_NUM,
      CS_CMPL: req.body.CS_CMPL,
      CS_BAIR: req.body.CS_BAIR,
      CS_MUNI: req.body.CS_MUNI,
      CS_ESTADO: req.body.CS_ESTADO,
      CS_PAIS: req.body.CS_PAIS,
      CS_CEP: req.body.CS_CEP,
      ARQUIVOCONS: req.body.ARQUIVOCONS,
      FLGVIDEO: req.body.presentation,
      FLGATIVA: req.body.status_info,
      CS_APELIDO: req.body.CS_APELIDO, 
    }, {
      where: {
        ID: req.body.id
      }
    });
    res.render("Screens/forms", { texto: "Consultoria editada com sucesso", page:"/consultancy"});
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerInfoConsultancyDelete = async (req, res) => {
  try {
    
    const destroy = await ModelConsultoria.destroy({
      where: {
        ID: req.body.id
      }
    });
    res.render("Screens/forms", { texto: "Consultoria deletada com sucesso", page:"/consultancy"});
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerInfoConsultancyCreate, controlerInfoConsultancyEdit, controlerInfoConsultancyDelete };
