import { ModelDocumentos } from "../../models/documentos.js";

var controlerFileCreate = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      let resendJson = JSON.parse(req.body.RESEND.replaceAll("["," "))
        const create = await ModelDocumentos.create({
          IDEMP: req.body.IDEMP,
          IDOPER:req.body.IDOPER,
          IDTAREFA:req.body.IDTAREFA,
          FILENAME:req.file.originalname,
          FILESOURCE:req.file.filename,
          FILETYPE:((req.file.mimetype).split("/"))[0]
        })
        res.render("Screens/formsBackOne", { texto: "Documento criado com sucesso", task:resendJson.task, dp:resendJson.dp, dir:resendJson.dir, dtr:resendJson.dtr, Status:resendJson.Status, name_oper:resendJson.name_oper, IDTAREFA:resendJson.IDTAREFA, IDOPER:resendJson.IDOPER, IDSCH:resendJson.IDSCH});
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerFileDelete = async (req, res) =>{
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      let resendJson = JSON.parse(req.body.RESEND.replaceAll("["," "))
        const destroy = await ModelDocumentos.destroy({
          where:{
            ID:req.body.ID
          }
        })
       
       res.render("Screens/formsBackOne", { texto: "Documento deletado com sucesso", task:resendJson.task, dp:resendJson.dp, dir:resendJson.dir, dtr:resendJson.dtr, Status:resendJson.Status, name_oper:resendJson.name_oper, IDTAREFA:resendJson.IDTAREFA, IDOPER:resendJson.IDOPER, IDSCH:resendJson.IDSCH});
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerFileCreate, controlerFileDelete };
