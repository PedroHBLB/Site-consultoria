export { CloseCompany }

var CloseCompany = (buttonCompnay, oper, nav, details, units, contacts, schedule)=>{
    for(var j=0;j<oper.children.length;j++){
        oper.children[j].style.background = "white"
        oper.children[j].style.pointerEvents = "none"
    }
    nav.style.display = "none"
    details.style.display = "none"
    units.style.display = "none"
    contacts.style.display = "none"
    schedule.style.display = "none"
    buttonCompnay.setAttribute("door","close")
}