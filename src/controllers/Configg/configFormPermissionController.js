import { ModelPermission } from "../../models/permission.js";
 
  var controlerPermissiongEdit = async (req, res) => {
    try {
        let listaNivel = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        let listaReq = [[req.body.create_consultoria_adm, req.body.edit_consultoria_adm , req.body.delete_consultoria_adm,
            req.body.create_cliente_adm, req.body.edit_cliente_adm , req.body.delete_cliente_adm,
            req.body.create_config_adm, req.body.edit_config_adm , req.body.delete_config_adm,
            req.body.create_workshop_adm, req.body.edit_workshop_adm , req.body.delete_workshop_adm],
            [req.body.create_consultoria_respondente, req.body.edit_consultoria_respondente , req.body.delete_consultoria_respondente,
            req.body.create_cliente_respondente, req.body.edit_cliente_respondente , req.body.delete_cliente_respondente,
            req.body.create_config_respondente, req.body.edit_config_respondente , req.body.delete_config_respondente,
            req.body.create_workshop_respondente, req.body.edit_workshop_respondente , req.body.delete_workshop_respondente],
            [req.body.create_consultoria_lidercliente, req.body.edit_consultoria_lidercliente , req.body.delete_consultoria_lidercliente,
            req.body.create_cliente_lidercliente, req.body.edit_cliente_lidercliente , req.body.delete_cliente_lidercliente,
            req.body.create_config_lidercliente, req.body.edit_config_lidercliente , req.body.delete_config_lidercliente,
            req.body.create_workshop_lidercliente, req.body.edit_workshop_lidercliente , req.body.delete_workshop_lidercliente],
            [req.body.create_consultoria_consultor, req.body.edit_consultoria_consultor , req.body.delete_consultoria_consultor,
            req.body.create_cliente_consultor, req.body.edit_cliente_consultor , req.body.delete_cliente_consultor,
            req.body.create_config_consultor, req.body.edit_config_consultor , req.body.delete_config_consultor,
            req.body.create_workshop_consultor, req.body.edit_workshop_consultor , req.body.delete_workshop_consultor],
            [req.body.create_consultoria_liderconsultor, req.body.edit_consultoria_liderconsultor , req.body.delete_consultoria_liderconsultor,
            req.body.create_cliente_liderconsultor, req.body.edit_cliente_liderconsultor , req.body.delete_cliente_liderconsultor,
            req.body.create_config_liderconsultor, req.body.edit_config_liderconsultor , req.body.delete_config_liderconsultor,
            req.body.create_workshop_liderconsultor, req.body.edit_workshop_liderconsultor , req.body.delete_workshop_liderconsultor]]

        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 4; j++){
                if(listaReq[i][(j*3)] == 'on' && listaReq[i][(j*3)+1] == 'on' && listaReq[i][(j*3)+2] == 'on'){
                    listaNivel[i][j] = 1
                }else if(listaReq[i][(j*3)] == 'on' && listaReq[i][(j*3)+2] == 'on'){
                    listaNivel[i][j] = 2
                }else if(listaReq[i][(j*3)+2] == 'on' && listaReq[i][(j*3)+1] == 'on'){
                    listaNivel[i][j] = 3
                }else if(listaReq[i][(j*3)] == 'on' && listaReq[i][(j*3)+1] == 'on'){
                    listaNivel[i][j] = 4
                }else if(listaReq[i][(j*3)] == 'on'){
                    listaNivel[i][j] = 5
                }else if(listaReq[i][(j*3)+2] == 'on'){
                    listaNivel[i][j] = 6
                }else if(listaReq[i][(j*3)+1] == 'on'){
                    listaNivel[i][j] = 7
                }else{
                    listaNivel[i][j] = 8
                }
            }
        }

        for(var i = 1; i < 6; i++){
            let permission = await ModelPermission.update({
                CLINIVEL: listaNivel[i-1][1],
                CONIVEL: listaNivel[i-1][0],
                CONFIGNIVEL: listaNivel[i-1][2],
                WORKNIVEL: listaNivel[i-1][3],
            },{
                where:{
                  ID: i
                }
              }
            )
        }
      res.render("Screens/forms", { texto: "Permissoes editadas com sucesso", page:"/configuration" });
    } catch (error) {
      console.log("Erro: " + error);
    }
  };
  
  export { controlerPermissiongEdit };
  