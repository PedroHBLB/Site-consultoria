import { ModelAnotacoes } from "../models/anotacoes.js";

import { ModelAreas } from "../models/areas.js";
import { ModelAtividades } from "../models/atividades.js";
import { ModelClassetermos } from "../models/classetermos.js";
import { ModelConsultor } from "../models/consultor.js";
import { ModelConsultoria } from "../models/consultoria.js"
import { ModelContatos } from "../models/contatos.js"

import { ModelDocumentos } from "../models/documentos.js"
import { ModelEmpresa } from "../models/empresa.js"
import { ModelEscalas } from "../models/escalas.js"
import { ModelFontecombos } from "../models/fontecombos.js"

import { ModelGrupo } from "../models/grupo.js";
import { ModelItemescalas } from "../models/itemescalas.js";
import { ModelLingua } from "../models/lingua.js";

import { ModelObjetivos } from "../models/objetivos.js";
import { ModelOperacional } from "../models/operacional.js";
import { ModelPadraoentrevista } from "../models/padraoentrevista.js";
import { ModelPapel } from "../models/papel.js";

import { ModelPorteempresa } from "../models/porteempresa.js";
import { ModelRegentrevista } from "../models/regentrevista.js";
import { ModelSchedule } from "../models/schedule.js";
import { ModelSetor } from "../models/setor.js";
import { ModelTarefas } from "../models/tarefas.js";

import { ModelTiposentradas } from "../models/tipoesentradas.js";

import { ModelUnidades } from "../models/unidades.js";
import { ModelUsuarios } from "../models/usuarios.js";
import { ModelVersions } from "../models/versions.js";



var TESTALL = async (req, res) => {
  try { 

    const anotacoes = await ModelAnotacoes.findAll();

    const areas = await ModelAreas.findAll();
    const atividades = await ModelAtividades.findAll();
    const classetermos = await ModelClassetermos.findAll();
    const consultor = await ModelConsultor.findAll();
    const consultoria = await ModelConsultoria.findAll();
    const contatos = await ModelContatos.findAll();

    const documentos = await ModelDocumentos.findAll();
    const empresa = await ModelEmpresa.findAll();
    const escalas = await ModelEscalas.findAll();
    const fontecombos = await ModelFontecombos.findAll();

    const grupo = await ModelGrupo.findAll();
    const itemescalas = await ModelItemescalas.findAll();
    const lingua = await ModelLingua.findAll();

    const objetivos = await ModelObjetivos.findAll();
    const operacional = await ModelOperacional.findAll();
    const padraoentrevista = await ModelPadraoentrevista.findAll();
    const papel = await ModelPapel.findAll();

    const porteempresa = await ModelPorteempresa.findAll();
    const regentrevista = await ModelRegentrevista.findAll();
    const schedule = await ModelSchedule.findAll();
    const setor = await ModelSetor.findAll();
    const tarefas = await ModelTarefas.findAll();

    const tiposentradas = await ModelTiposentradas.findAll();

    const unidades = await ModelUnidades.findAll();
    const usuarios = await ModelUsuarios.findAll();
    const versions = await ModelVersions.findAll();

    const all = [];
    all.push(anotacoes);
 
    all.push(areas)
    all.push(atividades)
    all.push(classetermos)
    all.push(consultor)
    all.push(consultoria)
    all.push(contatos)
  
    all.push(documentos)
    all.push(empresa)
    all.push(escalas);
    all.push(fontecombos);

    all.push(grupo);
    all.push(itemescalas)
    all.push(lingua)

    all.push(objetivos)
    all.push(operacional)
    all.push(padraoentrevista)
    all.push(papel)

    all.push(operacional)
    all.push(porteempresa);
    all.push(regentrevista)
    all.push(schedule)
    all.push(setor)
    all.push(tarefas)
    all.push(tiposentradas)
    all.push(unidades)
    all.push(usuarios)
    all.push(versions)

    res.send(all);
  } catch (error) {
    console.log("Erro: " + error);
  }
};

export { TESTALL };
