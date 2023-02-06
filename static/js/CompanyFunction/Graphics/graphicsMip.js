const ctx = document.getElementById("mip_canvas").getContext("2d");
const dados = document.getElementsByClassName("dados_canvas")[0].textContent;
let dL = dados.split(",");
let topo = 0;
let esq = 0;
let dir = 0

const chartAreaBg = {
  id: "ImgBack",
  beforeDraw: (chart, args, pluginOptions) => {
    const { ctx, chartArea: { top, bottom, left, right, width, height }, } = chart;
    topo = (height/8)+top
    esq = (width/8)+left
    dir = right-(width/8)
    const image = new Image();
    image.src = "Padrao/Matriz.PNG";

    if (image.complete) {
      ctx.drawImage(image, left, top, width + 2, height + 2);
    } else {
      image.onload = () => chart.draw();
    }

    chart.data.datasets.forEach((datasets, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index)=>{
        const {x, y} = datapoint.tooltipPosition();
        const text = chart.data.labels[i];
        const textWidth = ctx.measureText(text).width;

        let Xstart = x-((textWidth+10)/2)
        let Ystart = y-25
        let Xend = textWidth+10
        let Yend = 20

        let XtextPos = x-(textWidth/2)
        let YtextPos = y-10

        let Xtriesq = x-5
        let Xtridir = x+5
        let Ytriesq = y-5
        let Ytridir = y-5


        if(x >= dir){
          ctx.fillStyle = 'rgba(255 , 255, 255, 0.5)'
          Xstart = x-textWidth-15
          Ystart = y-10
          XtextPos = x-textWidth-10
          YtextPos = y+5
          Xtriesq = x-5
          Xtridir = x-5
          Ytriesq = y+5
          Ytridir = y-5
        }else if(y <= topo){
          ctx.fillStyle = 'rgba(255 , 255, 255, 0.5)';
          Ystart = y + 5
          Yend = 20
          YtextPos = y+20
          Ytridir = y+5
          Ytriesq = y+5
        }else{
          ctx.fillStyle = 'rgba(255 , 255, 255, 0.5)'
        }

        ctx.fillRect(Xstart, Ystart, Xend, Yend);
        ctx.restore();
       

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(Xtriesq, Ytriesq);
        ctx.lineTo(Xtridir, Ytridir);
        ctx.fill();
        ctx.restore

        ctx.font = '12px Arial';
        ctx.fillStyle = 'Black'
        ctx.fillText(text, XtextPos, YtextPos);
        ctx.restore();
        
      })
    });
  },
};

const mip = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        data: [
          {
            x: dL[0],
            y: dL[1],
          },
        ],
        label: "CONFIABILIDADE",
        backgroundColor: "rgb(0,0,0)",
      },
      {
        data: [
          {
            x: dL[2],
            y: dL[3],
          },
        ],
        label: "CUSTO",
        backgroundColor: "rgb(0,0,0)",
      },
      {
        data: [
          {
            x: dL[4],
            y: dL[5],
          },
        ],
        label: "QUALIDADE",
        backgroundColor: "rgb(0,0,0)",
      },
      {
        data: [
          {
            x: dL[6],
            y: dL[7],
          },
        ],
        label: "INOVAÇÃO",
        backgroundColor: "rgb(0,0,0)",
      },
      {
        data: [
          {
            x: dL[8],
            y: dL[9],
          },
        ],
        label: "VELOCIDADE",
        backgroundColor: "rgb(0,0,0)",
      },
      {
        data: [
          {
            x: dL[10],
            y: dL[11],
          },
        ],
        label: "FLEXIBILIDADE",
        backgroundColor: "rgb(0,0,0)",
      },
    ],
    labels:["CONFIABILIDADE","CUSTO","QUALIDADE","INOVAÇÃO","VELOCIDADE","FLEXIBILIDADE"],
  },
  options: {
    /*interaction: {
      mode: 'nearest',
      intersect: false,
    },*/
    scales: {
      y: {
        min: 0,
        max: 9,
        ticks: {
          callback: function (value, index, ticks) {
            if (value === 9) {
              return "Melhor";
            } else if (value === 4) {
              return "Igual";
            } else if (value === 0) {
              return "Pior";
            } else {
              return "";
            }
          },
        },
      },
      x: {
        min: 0,
        max: 9,
        ticks: {
          callback: function (value, index, ticks) {
            if (value === 9) {
              return "GP";
            } else if (value === 4) {
              return "Q";
            } else if (value === 0) {
              return "PI";
            } else {
              return "";
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled:false,
      },
    },
  },
  plugins: [chartAreaBg],
});
