export { OpenCompany }

var OpenCompany = (buttonCompany, oper, nav, details, units, contacts, schedule)=>{
    for(var j=0;j<oper.children.length;j++){
        oper.children[j].style.background = "white"
        oper.children[j].style.pointerEvents = "auto"
    }
    nav.style.display = "flex"
    details.style.display = "flex"
    units.style.display = "none"
    contacts.style.display = "none"
    schedule.style.display = "none"
    buttonCompany.style.color = "white"
    buttonCompany.style.background = "gray "
    buttonCompany.setAttribute("door","open")
    
    let buttonInterview = schedule.children[1].children[1]
    buttonInterview.style.pointerEvents = "none"
}