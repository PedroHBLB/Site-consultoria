export { adjustSchedule }

import { modifyDataString } from "../../modules/modifyDataString.js";

var adjustSchedule = async (ModelTarefas, agendas)=>{
    for (var i = 0; i < agendas.length; i++) {
        let tarefaTemp = "";
        ModelTarefas.forEach((tarefa) => {
        if (parseInt(tarefa.toJSON().ID) === parseInt(agendas[i][1])) {
            tarefaTemp = tarefa.toJSON().DESCRICAO;
        }
        });

        let dataPrev = agendas[i][2];
        dataPrev = new Date(dataPrev);
        dataPrev.setDate(dataPrev.getDate() + 2);

        let dataInic = agendas[i][3];
        dataInic = new Date(dataInic);
        dataInic.setDate(dataInic.getDate() + 2);

        let dataRexec = agendas[i][4];
        dataRexec = new Date(dataRexec);
        dataRexec.setDate(dataRexec.getDate() + 2);

        agendas[i][2] = dataPrev;
        agendas[i][3] = dataInic;
        agendas[i][4] = dataRexec;

        agendas[i][2] = agendas[i][2].toString();
        agendas[i][3] = agendas[i][3].toString();
        agendas[i][4] = agendas[i][4].toString();

        agendas[i][1] = tarefaTemp;
        agendas[i][2] = modifyDataString(agendas[i][2]);
        agendas[i][3] = modifyDataString(agendas[i][3]);
        agendas[i][4] = modifyDataString(agendas[i][4]);
      }
}