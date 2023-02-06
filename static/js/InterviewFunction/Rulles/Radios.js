const radio2 = document.getElementsByClassName("radio_input_2")
for(var i = 0; i < radio2.length;i+=6){
    radio2[i].name += i;
    radio2[i+1].name += i;
    radio2[i+2].name += i;
    radio2[i+3].name += i;
    radio2[i+4].name += i;
    radio2[i+5].name += i;
}