import { ModelConsultor } from "../../models/consultor.js";
import { ModelPapel } from "../../models/papel.js";

var controlerConsultantsConsultancyCreate = async (req, res) => {
  try {
    let senha = "";
    for (var i = 0; i < req.body.NAMECONS.length; i++) {
      if (req.body.NAMECONS[i] == " ") {
        break;
      }
      senha = senha + req.body.NAMECONS[i];
    }
    senha = senha[0].toUpperCase() + senha.substring(1).toLowerCase();

    const papel = await ModelPapel.findAll({
      where:{
        DESCRICAO: req.body.IDPAPEL
      }
    });
    const allpapel = await ModelPapel.findAll();
    allpapel.forEach(element => {
    });

    const create = await ModelConsultor.create({
      IDCONS: req.body.IDCONS,
      CONSULTOR: req.body.CONSULTOR,
      CSTR_ESPEC: req.body.CSTR_ESPEC,
      CSTR_EMAIL: req.body.CSTR_EMAIL,
      CSTR_TEL: req.body.CSTR_TEL,
      IDPAPEL: papel[0].toJSON().ID,
      CSTR_LINGUA: req.body.CSTR_LINGUA,
      FLGATIVO: req.body.status_consultant,
      CSTR_SENHA: senha + "@2022",
    });
    res.render("Screens/forms", { texto: "Consultor criado com sucesso", page:"/consultancy" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerConsultantsConsultancyEdit = async (req, res) => {
  try {
    const papel = await ModelPapel.findAll({
      where:{
        DESCRICAO: req.body.IDPAPEL
      }
    });
    const update = await ModelConsultor.update(
      {
        CONSULTOR: req.body.CONSULTOR,
        CSTR_ESPEC: req.body.CSTR_ESPEC,
        CSTR_EMAIL: req.body.CSTR_EMAIL,
        CSTR_TEL: req.body.CSTR_TEL,
        IDPAPEL: papel[0].toJSON().ID,
        CSTR_LINGUA: req.body.CSTR_LINGUA,
        FLGATIVO: req.body.status_consultant,
      },
      {
        where: {
          ID: req.body.ID,
        },
      }
    );

    res.render("Screens/forms", { texto: "Consultor editado com sucesso", page:"/consultancy" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerConsultantsConsultancyDelete = async (req, res) => {
  try {
    const destroy = await ModelConsultor.destroy({
      where: {
        ID: req.body.ID
      }
    });
    res.render("Screens/forms", { texto: "Consultor deletado com sucesso", page:"/consultancy" });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerConsultantsConsultancyCreate,
  controlerConsultantsConsultancyEdit,
  controlerConsultantsConsultancyDelete,
};
