var crudPlus = (button, numbers, string)=>{
    for(var i = 0; i < button.length; i++){
        button[i].addEventListener("click", (e)=>{
            let pai3 = e.target.parentNode.parentNode.parentNode
            let pai5 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
            let typeSelect = pai3.children[1].children[0].value;
            let entrevistaContent = pai5;
            let acceptButton = entrevistaContent.children[2].children[numbers[0]].children[0];
            entrevistaContent.children[0].style.display = "none"
            entrevistaContent.children[1].style.display = "none"
            entrevistaContent.children[2].style.display = "flex"
            entrevistaContent.style.height = numbers[1]
            /*let selectInput1 =  entrevistaContent.children[2].children[3].children[1].children[1].children[0].value
            let selectInput1meio =  entrevistaContent.children[2].children[3].children[1].children[1].children[0].textContent
            let selectResp1 =  entrevistaContent.children[2].children[3].children[1].children[1].children[0].children[0].value
            let selectInput2 =  entrevistaContent.children[2].children[4].children[1].children[1].children[0].value
            let selectInput2meio =  entrevistaContent.children[2].children[4].children[1].children[1].children[0].textContent
            let selectResp2 =  entrevistaContent.children[2].children[4].children[1].children[1].children[0].children[0].value
            let selectInput3 =  entrevistaContent.children[2].children[5].children[1].children[1].children[0].value
            let selectInput3meio =  entrevistaContent.children[2].children[5].children[1].children[1].children[0].textContent
            let selectResp3 =  entrevistaContent.children[2].children[5].children[1].children[1].children[0].children[0].value
    
            selectInput1 = selectResp1
            selectInput2 = selectResp2
            selectInput3 = selectResp3
            selectInput1meio = selectResp1
            selectInput2meio = selectResp2
            selectInput3meio = selectResp3*/

            entrevistaContent.children[2].setAttribute(string[0],typeSelect)
            acceptButton.setAttribute("mode","plus");
            acceptButton.setAttribute("type",string[1]);       
        })
    }
}
export { crudPlus };