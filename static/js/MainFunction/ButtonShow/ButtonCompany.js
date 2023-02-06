import { NavsCompany } from "/modules/MainModules/NavsCompany.js";
import { CloseAllCompany } from "/modules/MainModules/CloseAllCompany.js";
import { CloseCompany } from "/modules/MainModules/CloseCompany.js";
import { OpenCompany } from "/modules/MainModules/OpenCompany.js";
import { OpersCompany } from "/modules/MainModules/OpersCompany.js";
import { CloseOpers } from "/modules/MainModules/CloseOpers.js";
import { SendIDcompany } from "/modules/MainModules/SendIDcompany.js";
import { colorView } from "/modules/ChangeColorButton/firstChange.js";
import { CreateScheduleList } from "/modules/MainModules/CreateScheduleList.js";
import { CreateScheduleButton } from "/modules/MainModules/CreateScheduleButton.js";
import { EventScheduleButton } from "/modules/MainModules/EventScheduleButton.js";
import { DeleteScheduleButton } from "/modules/MainModules/DeleteScheduleButton.js";
import { ChangeColor } from "/modules/MainModules/ChangeColor.js";
import { getColor } from "/modules/MainModules/getColor.js";

const rigth_company_button = document.getElementsByClassName("main_company_button");
const left_company_button = document.getElementsByClassName("normal_side")[1];
const client_button = document.getElementsByClassName("nav_route")[1];

const scheduleText = document.getElementsByClassName("scheduleList")[0].textContent;
let scheduleList = CreateScheduleList(scheduleText)

for (var i = 0; i < rigth_company_button.length; i++) {
  rigth_company_button[i].addEventListener("click", (e) => {
    let buttonCompany = e.target
    let key = buttonCompany.getAttribute("door")
    let pai = e.target.parentNode.parentNode
    let oper = pai.children[0].children[1]
    let nav = pai.children[1]
    let details = pai.children[2].children[0]
    let units = pai.children[2].children[1]
    let contacts = pai.children[2].children[2]
    let schedule = pai.children[2].children[3]
    let scheduleScrollbar = schedule.children[0]

    if(key === "close"){
      CloseAllCompany()
      OpenCompany(buttonCompany, oper, nav, details, units, contacts, schedule)
      NavsCompany(nav)
      let operID = OpersCompany(buttonCompany, oper)
      let operColor = getColor(operID, oper)
      SendIDcompany(left_company_button, client_button, buttonCompany)
      DeleteScheduleButton(scheduleScrollbar)
      CreateScheduleButton(buttonCompany, scheduleScrollbar, scheduleList )
      ChangeColor(scheduleScrollbar, operColor)
      EventScheduleButton(scheduleScrollbar)
    }else{
      CloseCompany(buttonCompany, oper, nav, details, units, contacts, schedule)
      CloseOpers(buttonCompany, oper)
    }
  });
}

colorView(rigth_company_button);
