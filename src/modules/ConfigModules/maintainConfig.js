export { maintainConfig };

var maintainConfig = (button, number, page) => {
  if (number === "1") {

    let version_buttons = document.getElementsByClassName("version_button")
    let atributos = ''
    for(var i = 0; i < version_buttons.length;i++){
      if(version_buttons[i].style.boxShadow == "lightgray 0px 0px 1px 10px"){
        atributos = version_buttons[i].children[3].textContent.split(";")
      }
    }
    var row_1 = page.children[0];

    var column_1_1 = row_1.children[0].children[1];
    var column_1_2 = row_1.children[1].children[1];
    var radio_1 = document.getElementsByName("AtivoBloqueado");

    column_1_1.value = atributos[0];
    column_1_2.value = atributos[1][6]+atributos[1][7]+atributos[1][8]+atributos[1][9]+"-"+atributos[1][3]+atributos[1][4]+"-"+atributos[1][0]+atributos[1][1]

    if(atributos[2] === '1'){
      radio_1[0].checked = true;
    }else{
      radio_1[1].checked = true;
    }
  }else if (number == 2) {
    let version_buttons = document.getElementsByClassName("oper_button")
    let atributos = ''
    for(var i = 0; i < version_buttons.length;i++){
      if(version_buttons[i].style.boxShadow == "lightgray 0px 0px 1px 10px"){
        atributos = version_buttons[i].children[3].textContent.split(";")
      }
    }

    var row_1 = page.children[0];
    var row_2 = page.children[1];

    var column_1_1 = row_1.children[0].children[1];
    var column_1_2 = row_1.children[1].children[1];
    var column_2_1 = row_2.children[0].children[1];
    var select_1 = row_2.children[1].children[1].children[0];
    var img_1 = row_2.children[1].children[1].children[2]

    column_1_1.value = atributos[0];
    column_1_2.value = atributos[1];
    column_2_1.value = atributos[3];

    for (var i = 0; i < select_1.options.length; i++) {
      if (select_1.options[i].text == atributos[4]) {
        select_1.selectedIndex = i;
        break;
      }
    }

    var imagens = {
        "0":"Operational/kick.png",
        "1":"Operational/align.png",
        "2":"Operational/today.png",
        "3":"Operational/diag.png",
        "4":"Operational/recom.png",
        "5":"Operational/action.png",
        "6":"Operational/close.png",
    }
    img_1.setAttribute("src", imagens[atributos[4]]) 
  }else if(number == 3){
    let version_buttons = document.getElementsByClassName("task_button_config")
    let atributos = ''
    for(var i = 0; i < version_buttons.length;i++){
      if(version_buttons[i].style.boxShadow == "lightgray 0px 0px 1px 10px"){
        atributos = version_buttons[i].children[3].textContent.split(";")
      }
    }

    var row_1 = page.children[0];
    var row_2 = page.children[1];

    var select_1 = row_1.children[0].children[1].children[0];
    var column_1_2 = row_1.children[1].children[1];
    var column_1_3 = row_1.children[2].children[1];
    var column_2_1 = row_2.children[0].children[1];

    column_1_2.value = atributos[1];
    column_1_3.value = atributos[2];
    column_2_1.value = atributos[3];


    for (var i = 0; i < select_1.options.length; i++) {
      if (select_1.options[i].text == atributos[0]) {
        select_1.selectedIndex = i;
        break;
      }
    }
  }
  
};
