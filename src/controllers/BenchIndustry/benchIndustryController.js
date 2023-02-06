import { ModelRespentrevista } from "../../models/respentrevista.js";
import { ModelRespindentrevista } from "../../models/respindentrevista.js";

var controlerBenchIndustry = async (req, res) => {
  try {
    if (req.cookies.user.email === "") {
      res.status(403).json({
        error: "Login Invalido",
      });
    } else {
      let objetivosTemp = []
      let sucess = []
      let objetivo = []
      let tech = []
      let year = []
      let techNames = ["Machine Learning","Internet of Things (IoT)","Robotização","Realidade Estendida (3D, RA, RV, xR)","Simulação Digital e Gêmeos Digitais","Robotic Process Automation (RPA)","Cloud Computing","Sistema de Visão","Advanced Planning and Scheduling (APS)","Manufacturing Execution System","Cybersecurity"]
      const indicadores = await ModelRespindentrevista.findAll()
      const respen = await ModelRespentrevista.findAll()
      for(var i=0; i < indicadores.length;i++){
        let indicador = indicadores[i].toJSON()
        if(indicador.IDTIPOENTRADA == 11){
          sucess.push(indicador.INDICADOR)
          sucess.push(indicador.META)
          sucess.push(indicador.REAL)
          sucess.push(indicador.OBJ)
          sucess.push(indicador.IDTIPOENTRADA)
          objetivosTemp.push(indicador.OBJETIVO)
        }
      }

      for(var i=0; i < objetivosTemp.length;i++){
        objetivosTemp[i]=objetivosTemp[i].split("!")
        for(var j=0;j<objetivosTemp[i][j].length-1;j++){
          objetivo.push(objetivosTemp[i][j])
        }
      }

      for(var i=0; i < respen.length;i++){
        let respenTemp = respen[i].toJSON()
        if(respenTemp.IDTIPOENTRADA == 13){
          let temp = []
          let techTemps = respenTemp.RESPOSTA.split(";")
          for(var j=0; j < techNames.length;j++){
            if(techTemps.includes(techNames[j])){
              temp[j] = 1
            }else{
              temp[j] = 0
            }
          }
          temp[11] = respenTemp.YEAR-2021
          tech.push(temp)
          if(!year.includes(respenTemp.YEAR)){
            year.push(respenTemp.YEAR)
          }
        }
      }
      console.log(year)

      res.render("Screens/benchIndustry", {
        user: req.cookies.user,
        company: req.query.company,
        name: req.cookies.user.nome,
        papelName: req.cookies.user.papelName,
        empresaName: req.cookies.user.empresaName,
        linguas: req.cookies.user.linguas,
        objetivo,
        sucessLista: sucess,
        tech,
        year
      });
    }
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { controlerBenchIndustry };
