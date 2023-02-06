export { allowResponses }
var allowResponses = (input, select, square, page_acr, num)=>{
    for (var i = 0; i < input.length; i++) {
        input[i].style.background = "white";
        input[i].style.border = "2px solid #1684ff";
      }
    
      for (var i = 0; i < select.length; i++) {
        select[i].style.background = "white";
        select[i].style.border = "2px solid #1684ff";
      }
    
      for (var i = 0; i < square.length; i++) {
        square[i].style.background = "#3278c4";
        square[i].style.border = "2px solid #1684ff";
      }
      page_acr[num].style.display = "flex";
}