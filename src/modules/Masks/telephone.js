export {telephone}
var telephone = (tel_lista)=>{
    for (var i = 0; i < tel_lista.length; i++) {
        tel_lista[i].addEventListener("keyup", (e) => {
          let tel = e.target;
          if (tel.value.length <= 16) {
            tel.value = tel.value.replace(/\D/g, "");
            tel.value = tel.value.replace(/^(\d{4})(\d)/g, "+$1 $2");
            tel.value = tel.value.replace(/(\d{1})(\d{4})$/, "$1-$2");
          } else {
            tel.value = tel.value.substring(0, 16);
          }
        });
      }
}