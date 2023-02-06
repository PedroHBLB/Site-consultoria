export {cep}
var cep = (CPE)=>{
    for (var i = 0; i < CPE.length; i++) {
        CPE[i].addEventListener("keyup", (e) => {
          let cepTemp = e.target
          if (cepTemp.value.length < 9) {
            cepTemp.value = cepTemp.value.replace(/\D/g, "");
            cepTemp.value = cepTemp.value.replace(/^(\d{5})(\d{3})/g, "$1-$2");
          } else {
            cepTemp.value = cepTemp.value.substring(0, 9);
          }
        });
      }
}