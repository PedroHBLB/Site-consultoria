export { CloseAllCompany };

const Companys = document.getElementsByClassName("main_company");

var CloseAllCompany = () => {
  for (var i = 0; i < Companys.length; i++) {
    let buttonCompany = Companys[i].children[0].children[0];
    let oper = Companys[i].children[0].children[1]
    let nav = Companys[i].children[1];
    let details = Companys[i].children[2].children[0];
    let units = Companys[i].children[2].children[1];
    let contacts = Companys[i].children[2].children[2];
    let schedule = Companys[i].children[2].children[3];

    for(var j=0;j<oper.children.length;j++){
      oper.children[j].style.background = "white"
      oper.children[j].style.pointerEvents = "none"
    }
    nav.style.display = "none";
    details.style.display = "none";
    units.style.display = "none";
    contacts.style.display = "none";
    schedule.style.display = "none";
    buttonCompany.style.color = "gray"
    buttonCompany.style.background = "white "
    buttonCompany.setAttribute("door", "close");

  }
};
