const projectInput = document.getElementsByClassName("project_input_rulles");

for(var i = 0; i < projectInput.length; i++){
    projectInput[i].value = projectInput[i].value.replaceAll("!", " ");
}