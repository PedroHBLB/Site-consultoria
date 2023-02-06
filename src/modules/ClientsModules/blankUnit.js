export {blankUnit}
var blankUnit = (page)=>{
    for (var j = 0; j < page.children[0].children.length; j++) {
        var button_temp = document.getElementsByClassName("units_button")[j];
        button_temp.style.boxShadow = "0px 0px 0px 0px white";
      }
      var row_1 = page.children[2].children[0];
      var row_2 = page.children[2].children[1];
      var row_3 = page.children[2].children[2];
  
      var column_1_1 = row_1.children[0].children[1];
      var column_1_2 = row_1.children[1].children[1];
      var column_1_3 = row_1.children[2].children[1];
      var column_2_1 = row_2.children[0].children[1];
      var column_2_2 = row_2.children[1].children[1];
      var column_2_3 = row_2.children[2].children[1];
      var column_3_1 = row_3.children[0].children[1];
      var column_3_2 = row_3.children[1].children[1];
      var column_3_3 = row_3.children[2].children[1];
  
      column_1_1.value = "";
      column_1_2.value = "";
      column_1_3.value = "";
      column_2_1.value = "";
      column_2_2.value = "";
      column_2_3.value = "";
      column_3_1.value = "";
      column_3_2.value = "";
      column_3_3.value = "";
}