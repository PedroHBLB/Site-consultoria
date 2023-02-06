const atributosList = document.getElementsByClassName("project_attributes");
const atributosListText = document.getElementsByClassName("project_attributes_text");
const canvasList = document.getElementsByClassName("project_canvas");

const chartAreaBg = {
    id: "ImgBack",
    beforeDraw: (chart, args, pluginOptions) => {
      const { ctx, chartArea: { top, bottom, left, right, width, height }, } = chart;
      const image = new Image();
      image.src = "Padrao/EspinhaPeixe.png";
  
      if (image.complete) {
        ctx.drawImage(image, left, top, width + 2, height + 2);
      } else {
        image.onload = () => chart.draw();
      }
    },
};

Chart.defaults.elements.point.radius = 5
Chart.defaults.elements.point.hoverRadius = 10

for(var i = 0; i < canvasList.length; i++){
    let listaAtri = atributosList[i].textContent.split(";")
    let listaAtriText = atributosListText[i].textContent.split("?")
    let show = ["","","","","",""]
    let problemas = []
    for(var j = 0; j < listaAtri.length;j++){
        if(listaAtri[j] === "true"){
            show[j] ="circle" 
        }else{
            show[j] = false
        }
    }
    for(var j = 0; j < listaAtriText.length;j++){
        problemas[j] = listaAtriText[j].split(";")
    }
  
    const peixe = new Chart(canvasList[i], {
        type: "scatter",
        data: {
        datasets: [
            {
            data: [
                {
                x: 0.4,
                y: 2.3,
                },
            ],
            label: "MEIO AMBIENTE",
            backgroundColor: 'rgb(255,255,255)',
            pointStyle:show[5]
            },
            {
                data: [
                {
                    x: 1.2,
                    y: 2.5,
                },
                ],
                label: "MÁQUINA",
                backgroundColor: 'rgb(255,255,255)',
                pointStyle:show[4]
                
            },
            {
                data: [
                {
                    x: 2,
                    y: 2.5,
                },
                ],
                label: "MÃO DE OBRA",
                backgroundColor: 'rgb(255,255,255)',
                pointStyle:show[0]
                
            },
            {
                data: [
                {
                    x: 0.4,
                    y: 0.8,
                },
                ],
                label: "MEDIÇÃO",
                backgroundColor: 'rgb(255,255,255)',
                pointStyle:show[3]
                
            },
            {
                data: [
                {
                    x: 1.2,
                    y: 0.5,
                },
                ],
                label: "MATERIAL",
                backgroundColor: 'rgb(255,255,255)',
                pointStyle:show[1]
                
            },
            {
                data: [
                {
                    x: 2,
                    y: 0.5,
                },
                ],
                label: "MÉTODO",
                backgroundColor: 'rgb(255,255,255)',
                pointStyle:show[2]
                
            },

        ],
        
        },
        options: {
            scales:{
                y: {
                    min: 0,
                    max: 3,
                    display: false
                },
                x: {
                    min: 0,
                    max: 3,
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(context){
                            let title = context[0].dataset.label
                            return title
                        },
                        afterTitle:function(context){
                            return "=========="
                        },
                        label: function(context) {
                            let label = context.dataset.label || '';
                            let num = 0
                            let resposta = []
                            if(label === "MÃO DE OBRA"){
                                num = 0
                            }else if(label === "MATERIAL"){
                                num = 1
                            }else if(label === "MÉTODO"){
                                num = 2
                            }else if(label === "MEDIÇÃO"){
                                num = 3
                            }else if(label === "MÁQUINA"){
                                num = 4
                            }else if(label === "MEIO AMBIENTE"){
                                num = 5
                            }
                            if(problemas[num].length > 1 || problemas[num][0] != ""){
                                for(var j = 0; j < problemas[num].length;j++){
                                        resposta[j] = problemas[num][j]

                                }
                            }else{
                                resposta[0] = "Sem problemas encontrados"
                            }

                    
                            return resposta;
                        }
                    }
                }
            },
        },
        plugins: [chartAreaBg],
    });
}