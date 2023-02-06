import { ModelAnotacoes } from "../../models/anotacoes.js";

var controlerAnotCreate = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      let resendJson = JSON.parse(req.body.RESEND.replace("["," "))
      const create = await ModelAnotacoes.create({
        IDEMP:req.body.IDEMP,
        IDOPER:req.body.IDOPER,
        IDTAREFA:req.body.IDTAREFA,
        TITULO:req.body.TITULO,
        TEXTO:req.body.TEXTO
      })
        res.render("Screens/formsBackOne", { texto: "Anotação criada com sucesso", task:resendJson.task, dp:resendJson.dp, dir:resendJson.dir, dtr:resendJson.dtr, Status:resendJson.Status, name_oper:resendJson.name_oper, IDTAREFA:resendJson.IDTAREFA, IDOPER:resendJson.IDOPER, IDSCH:resendJson.IDSCH});
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerAnotEdit = async (req, res) => {
    try {
        if (req.cookies.user.email === "") {
          res.status(403).json({
            error: "Login Invalido",
          });
        } else {
          let resendJson = JSON.parse(req.body.RESEND.replace("["," "))
          const update = await ModelAnotacoes.update({
            TEXTO:req.body.TEXTO
          },{
            where:{
                ID:req.body.ID
            }
          })
            res.render("Screens/formsBackOne", { texto: "Anotação editada com sucesso", task:resendJson.task, dp:resendJson.dp, dir:resendJson.dir, dtr:resendJson.dtr, Status:resendJson.Status, name_oper:resendJson.name_oper, IDTAREFA:resendJson.IDTAREFA, IDOPER:resendJson.IDOPER, IDSCH:resendJson.IDSCH});
        }
      } catch (error) {
        console.log("Erro: " + error);
      }
}

var controlerAnotDelete = async (req, res) => {
    try {
        if (req.cookies.user.email === "") {
          res.status(403).json({
            error: "Login Invalido",
          });
        } else {
          let resendJson = JSON.parse(req.body.RESEND.replace("["," "))
          const destroy = await ModelAnotacoes.destroy({
            where:{
                ID:req.body.ID
            }
          })
            res.render("Screens/formsBackOne", { texto: "Anotação deletada com sucesso", task:resendJson.task, dp:resendJson.dp, dir:resendJson.dir, dtr:resendJson.dtr, Status:resendJson.Status, name_oper:resendJson.name_oper, IDTAREFA:resendJson.IDTAREFA, IDOPER:resendJson.IDOPER, IDSCH:resendJson.IDSCH});
        }
      } catch (error) {
        console.log("Erro: " + error);
      }
}
export { controlerAnotCreate, controlerAnotEdit, controlerAnotDelete };
