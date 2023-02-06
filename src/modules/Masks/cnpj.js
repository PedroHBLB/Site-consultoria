export { cnpj };
var cnpj = (CNPJ) => {
    for (var i = 0; i < CNPJ.length; i++) {
        CNPJ[i].addEventListener("keyup", (e) => {
          let cnpjTemp = e.target
          if (cnpjTemp.value.length < 16) {
            cnpjTemp.value = cnpjTemp.value.replace(/\D/g, "");
            cnpjTemp.value = cnpjTemp.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/g,"$1.$2.$3/$4-");
            if(cnpjTemp.value.length === 16){
                let temp_cnpj = cnpjTemp.value.replace('.',"")
                temp_cnpj = temp_cnpj.replace('.',"")
                temp_cnpj = temp_cnpj.replace('/',"")
                temp_cnpj = temp_cnpj.replace('-',"")
      
                let mult_pd = [5,4,3,2,9,8,7,6,5,4,3,2]
                let mult_sd = [6,5,4,3,2,9,8,7,6,5,4,3,2]
      
                let valor = 0;
                for(var i =0; i<temp_cnpj.length;i++){
                    valor+= parseInt(temp_cnpj[i])*mult_pd[i]
                }
                
                let pd = 0
                let resto = valor%11
                if(resto<2){
                    pd = 0
                }else{
                    pd = 11-resto
                }
      
                temp_cnpj+=pd
                valor = 0
                for(var i =0; i<temp_cnpj.length;i++){
                    valor+= parseInt(temp_cnpj[i])*mult_sd[i]
                }
      
                let sd = 0
                resto = valor%11
                if(resto<2){
                    sd = 0
                }else{
                    sd = 11-resto
                }
      
                cnpjTemp.value=cnpjTemp.value+pd
                cnpjTemp.value=cnpjTemp.value+sd
            }
          }else{
            cnpjTemp.value=cnpjTemp.value.substring(0,18)
          }
        });
      }
};
