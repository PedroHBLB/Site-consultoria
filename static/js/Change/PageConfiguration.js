var chave = true;
var number = 0;

const version = document.getElementsByClassName("config_object_button")[0];
const operational = document.getElementsByClassName("config_object_button")[1];
const task = document.getElementsByClassName("config_object_button")[2];
const permission = document.getElementsByClassName("config_object_button")[3];

const version_content = document.getElementsByClassName("config_object_continer")[0];
const operational_content = document.getElementsByClassName("config_object_continer")[1];
const task_content = document.getElementsByClassName("config_object_continer")[2];
const permission_content = document.getElementsByClassName("config_object_continer")[3];

const crud = document.getElementsByClassName("crud_container")[0];
const acr = document.getElementsByClassName("ACR_container");

for (var i = 0; i < acr.length; i++) {
  acr[i].style.display = "flex";
}

version.addEventListener("click", (e) => {
  if (chave || number !== 1) {
    version_content.style.display = "flex";
    operational_content.style.display = "none";
    task_content.style.display = "none";
    if(permission_content != undefined){
      permission_content.style.display = "none";
    }

    version.style.border = "5px solid";
    operational.style.border = "2px solid";
    task.style.border = "2px solid";
    if(permission != undefined){
      permission.style.border = "2px solid";
    }

    chave = false;
    number = 1;
    crud.setAttribute("number", 1);
  } else {
    version_content.style.display = "none";
    chave = true;
    crud.setAttribute("number", 0);
  }
});

operational.addEventListener("click", (e) => {
  if (chave || number !== 2) {
    operational_content.style.display = "flex";
    version_content.style.display = "none";
    task_content.style.display = "none";
    if(permission_content != undefined){
      permission_content.style.display = "none";
    }

    version.style.border = "2px solid";
    operational.style.border = "5px solid";
    task.style.border = "2px solid";
    if(permission != undefined){
      permission.style.border = "2px solid";
    }

    chave = false;
    number = 2;
    crud.setAttribute("number", 2);
  } else {
    operational_content.style.display = "none";
    chave = true;
    crud.setAttribute("number", 0);
  }
});

task.addEventListener("click", (e) => {
  if (chave || number !== 3) {
    task_content.style.display = "flex";
    operational_content.style.display = "none";
    version_content.style.display = "none";
    if(permission_content != undefined){
      permission_content.style.display = "none";
    }

    version.style.border = "2px solid";
    operational.style.border = "2px solid";
    task.style.border = "5px solid";
    if(permission != undefined){
      permission.style.border = "2px solid";
    }

    chave = false;
    number = 3;
    crud.setAttribute("number", 3);
  } else {
    task_content.style.display = "none";
    chave = true;
    crud.setAttribute("number", 0);
  }
});

if(permission != undefined){
  permission.addEventListener("click", (e) => {
    if (chave || number !== -1) {
      permission_content.style.display = "flex";
      task_content.style.display = "none";
      operational_content.style.display = "none";
      version_content.style.display = "none";
  
      version.style.border = "2px solid";
      operational.style.border = "2px solid";
      task.style.border = "2px solid";
      permission.style.border = "5px solid";
  
      chave = false;
      number = -1;
      crud.setAttribute("number", -1);
    } else {
      permission_content.style.display = "none";
      chave = true;
      crud.setAttribute("number", 0);
    }
  });
}

