import { ModelConsultoria } from "../../models/consultoria.js";
import { ModelEmpresa } from "../../models/empresa.js";
import { ModelPorteempresa } from "../../models/porteempresa.js";
import { ModelSetor } from "../../models/setor.js";

import fs from "fs";
import path from "path";
import { ModelSchedule } from "../../models/schedule.js";


var controlerInfoClientCreate = async (req, res) => {
  try {
    const setor = await ModelSetor.findAll({
      where: {
        DESCRICAO: req.body.EM_IDSETOR,
      },
    });
    const rob = await ModelPorteempresa.findAll({
      where: {
        CLASSIFICACAO: req.body.EM_IDROB,
      },
    });
    const consultoria = await ModelConsultoria.findAll({
      where: {
        CONSULTORIA: req.body.EM_IDCONS,
      },
    });

    let PosicaoTemp = parseInt(req.body.POSICAO);
    while(true){
      let empTemp = await ModelEmpresa.findAll({
        where: {
          POSICAO: PosicaoTemp
        }
      })
      if(empTemp.length > 0){
        PosicaoTemp++;
      }else{
        break;
      }
    }

    const create = await ModelEmpresa.create({
      FLGATIVA: req.body.YesNo,
      EM_NOME: req.body.EM_NOME,
      EM_IDSETOR: setor[0].toJSON().ID,
      EM_IDROB: rob[0].toJSON().ID,
      EM_IDCONS: consultoria[0].toJSON().ID,
      EM_CNPJ: req.body.EM_CNPJ,
      EM_TELEMP: req.body.EM_TELEMP,
      EM_WEBPAGE: req.body.EM_WEBPAGE,
      PF_NOME: req.body.PF_NOME,
      PF_CARGO: req.body.PF_CARGO,
      PF_TEL: req.body.PF_TEL,
      PF_EMAIL: req.body.PF_EMAIL,
      PF_APELIDO: req.body.PF_APELIDO,
      POSICAO: PosicaoTemp
    });

    let nomeEmpresa = req.body.EM_NOME.split(" ")
    fs.mkdirSync(path.resolve()+"\\static\\img\\Empresas\\"+nomeEmpresa[0])


    const allEmpresas = await ModelEmpresa.findAll()
    let idEmpresa = allEmpresas[allEmpresas.length-1].ID

    let operTask = [[1,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[3,8],[3,9],[4,10],[4,11],[5,12],[6,13],[6,14],[6,15],[7,16]];
    for(let i = 0; i < operTask.length; i++){
      let createSchedule = await ModelSchedule.create({
        IDEMP: idEmpresa,
        IDOPER: operTask[i][0],
        IDTAREFA: operTask[i][1],
        DTPREV: '1111-11-11',
        DTINIC: '1111-11-11',
        DREXEC: '1111-11-11',
        STATUS: 0
      })
    }
    res.render("Screens/forms", { texto: "Cliente criado com sucesso", page:"/client,"+idEmpresa });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerInfoClientEdit = async (req, res) => {
  try {
    if(req.body.POSICAO != req.body.PosAnt){
      const empTemp = await ModelEmpresa.findAll({
        where: {
          POSICAO: req.body.POSICAO
        }
      })
      const updateTemp = await ModelEmpresa.update(
        {
          POSICAO: req.body.PosAnt
        },
        {
          where: {
            ID: empTemp[0].toJSON().ID
          },
        }
      );
    }
    const setor = await ModelSetor.findAll({
      where: {
        DESCRICAO: req.body.EM_IDSETOR,
      },
    });
    const rob = await ModelPorteempresa.findAll({
      where: {
        CLASSIFICACAO: req.body.EM_IDROB,
      },
    });
    const consultoria = await ModelConsultoria.findAll({
      where: {
        CONSULTORIA: req.body.EM_IDCONS,
      },
    });
    const update = await ModelEmpresa.update(
      {
        FLGATIVA: req.body.YesNo,
        EM_NOME: req.body.EM_NOME,
        EM_IDSETOR: setor[0].toJSON().ID,
        EM_IDROB: rob[0].toJSON().ID,
        EM_IDCONS: consultoria[0].toJSON().ID,
        EM_CNPJ: req.body.EM_CNPJ,
        EM_TELEMP: req.body.EM_TELEMP,
        EM_WEBPAGE: req.body.EM_WEBPAGE,
        PF_NOME: req.body.PF_NOME,
        PF_CARGO: req.body.PF_CARGO,
        PF_TEL: req.body.PF_TEL,
        PF_EMAIL: req.body.PF_EMAIL,
        PF_APELIDO: req.body.PF_APELIDO,
        POSICAO: req.body.POSICAO
      },
      {
        where: {
          ID: req.body.ID,
        },
      }
    );
    res.render("Screens/forms", { texto: "Cliente editado com sucesso", page:"/client,"+req.body.ID });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

var controlerInfoClientDelete = async (req, res) => {
  try {
    const destroy = await ModelEmpresa.destroy({
        where: {
          ID: req.body.ID
        }
      });

      let nomeEmpresa = req.body.EM_NOME.split(" ")
      fs.rmdirSync(path.resolve()+"\\static\\img\\Empresas\\"+nomeEmpresa[0])

    res.render("Screens/forms", { texto: "Cliente deletado com sucesso", page:"/main," });
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export {
  controlerInfoClientCreate,
  controlerInfoClientEdit,
  controlerInfoClientDelete,
};
