import { CreateScheduleList } from "/modules/MainModules/CreateScheduleList.js";
import { CreateScheduleButton } from "/modules/MainModules/CreateScheduleButton.js";
import { EventScheduleButton } from "/modules/MainModules/EventScheduleButton.js";
import { DeleteScheduleButton } from "/modules/MainModules/DeleteScheduleButton.js";
import { ChangeColor } from "/modules/MainModules/ChangeColor.js";
import { ChangeOper } from "/modules/MainModules/ChangeOper.js";
import { colorOper } from "/modules/ChangeColorButton/OperChange.js";

const oper_button = document.getElementsByClassName("main_oper_button");

const scheduleText =
  document.getElementsByClassName("scheduleList")[0].textContent;
let scheduleList = CreateScheduleList(scheduleText);

for (var i = 0; i < oper_button.length; i++) {
  oper_button[i].addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    let pai3 = e.target.parentNode.parentNode.parentNode
    let button = e.target;
    let IDoper = button.getAttribute("id");
    let color = button.getAttribute("color");
    let scheduleScrollbar = pai3.children[2].children[3].children[0];
    let buttonCompany = pai3.children[0].children[0];
    let operContainer = pai1;
    let buttonInterview =
      pai3.children[2].children[3].children[1].children[1];

    buttonCompany.setAttribute("idoper", IDoper);

    ChangeOper(operContainer, button);
    DeleteScheduleButton(scheduleScrollbar);
    CreateScheduleButton(buttonCompany, scheduleScrollbar, scheduleList);
    ChangeColor(scheduleScrollbar, color);
    EventScheduleButton(scheduleScrollbar);
    buttonInterview.style.pointerEvents = "none";
  });
}

colorOper(oper_button);
