import { ModelConsultor } from "../../models/consultor.js";
import { ModelConsultoria } from "../../models/consultoria.js";
import { ModelPapel } from "../../models/papel.js";
import { ModelPorteempresa } from "../../models/porteempresa.js";
import { ModelPermission } from "../../models/permission.js";

var controlerConsultancy = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      const user = req.cookies.user;
      const consultoriaLista = [];
      const consultorLista = [];
      const allPapel = await ModelPapel.findAll();
      const allPorteempresa = await ModelPorteempresa.findAll();
      let permission;
      const allPermission = await ModelPermission.findAll()

      if (user.consultoria != 0) {
        const consultoria = await ModelConsultoria.findByPk(
          user.consultoria
        );
        const consultor = await ModelConsultor.findAll();
        
        let consultoriaJson = consultoria.toJSON();

        allPorteempresa.forEach((element) => {
          if (element.toJSON().ID === consultoriaJson.CS_IDROB) {
            consultoriaJson.CS_IDROB = element.toJSON().CLASSIFICACAO;
          }
        });

        consultor.forEach((element) => {
          let consultorJson = element.toJSON();

          allPapel.forEach(papel => {
            if(parseInt(papel.ID) === parseInt(consultorJson.IDPAPEL)){
              consultorJson.IDPAPEL = papel.DESCRICAO
            }
          });

          if (consultoriaJson.ID == consultorJson.IDCONS) {
            consultorLista.push(JSON.stringify(consultorJson));
          }
        });

        consultoriaLista.push(JSON.stringify(consultoriaJson));
       
      } else {
        const consultoria = await ModelConsultoria.findAll();
        const consultor = await ModelConsultor.findAll();
        

        consultoria.forEach((element) => {
          let consultoriaJson = element.toJSON();

          allPorteempresa.forEach((element) => {
            if (element.toJSON().ID === consultoriaJson.CS_IDROB) {
              consultoriaJson.CS_IDROB = element.toJSON().CLASSIFICACAO;
            }
          });

          consultor.forEach((element) => {
            let consultorJson = element.toJSON();

            allPapel.forEach(papel => {
              if(parseInt(papel.ID) === parseInt(consultorJson.IDPAPEL)){
                consultorJson.IDPAPEL = papel.DESCRICAO
              }
            });

            if (consultoriaJson.ID == consultorJson.IDCONS) {
              consultorLista.push(JSON.stringify(consultorJson));
            }
          });

          consultoriaLista.push(JSON.stringify(consultoriaJson));
        });
      }

      allPermission.forEach((permi)=>{
        if(permi.toJSON().IDPAPEL == user.papel){
          permission = permi.toJSON().CONIVEL
        }
      })

      res.render("Screens/consultancy", {
        user: user,
        consultorias: consultoriaLista,
        consultores: consultorLista,
        permission
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerConsultancy };
