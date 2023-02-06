import express from "express";
const routerModules = express.Router();

routerModules.get("/ChangePagesModules/buttonClick.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ChangePagesModules/buttonClick.js"
  );
});

routerModules.get("/ChangePagesModules/buttonAllowed.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ChangePagesModules/buttonAllowed.js"
  );
});

routerModules.get("/ChangePagesModules/hiddenPage.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ChangePagesModules/hiddenPage.js");
});

routerModules.get("/ChangeColorButton/navChange.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ChangeColorButton/navChange.js");
});

routerModules.get("/ChangeColorButton/OperChange.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ChangeColorButton/OperChange.js");
});

routerModules.get("/ChangeColorButton/firstChange.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ChangeColorButton/firstChange.js");
});

routerModules.get("/ChangeColorButton/workshopChange.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ChangeColorButton/workshopChange.js"
  );
});

routerModules.get("/ClientsModules/blankClient.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/blankClient.js");
});

routerModules.get("/ClientsModules/blankUnit.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/blankUnit.js");
});

routerModules.get("/ClientsModules/blankContact.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/blankContact.js");
});

routerModules.get("/ClientsModules/blankSchedule.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/blankSchedule.js");
});

routerModules.get("/ClientsModules/ResetInfoClient.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ClientsModules/ResetInfoClient.js"
  );
});

routerModules.get("/ClientsModules/createList.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/createList.js");
});

routerModules.get("/ClientsModules/createUnit.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/createUnit.js");
});

routerModules.get("/ClientsModules/createContact.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/createContact.js");
});

routerModules.get("/ClientsModules/createSchedule.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/createSchedule.js");
});

routerModules.get("/ClientsModules/eventUnit.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/eventUnit.js");
});

routerModules.get("/ClientsModules/eventContact.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/eventContact.js");
});

routerModules.get("/ClientsModules/eventSchedule.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ClientsModules/eventSchedule.js");
});

routerModules.get("/ConsultancyModules/blankConsultancy.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/blankConsultancy.js"
  );
});

routerModules.get("/ConsultancyModules/blankConsultant.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/blankConsultant.js"
  );
});

routerModules.get("/ConsultancyModules/createConsultant.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/createConsultant.js"
  );
});

routerModules.get("/ConsultancyModules/eventsConsultant.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/eventsConsultant.js"
  );
});

routerModules.get("/ConsultancyModules/resetInfoConsultancy.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/resetInfoConsultancy.js"
  );
});

routerModules.get(
  "/ConsultancyModules/resetConsultantsConsultancy.js",
  (req, res) => {
    res.sendFile(
      process.cwd() +
        "/src/modules/ConsultancyModules/resetConsultantsConsultancy.js"
    );
  }
);

routerModules.get("/ConsultancyModules/setConsultancy.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/setConsultancy.js"
  );
});

routerModules.get("/ConfigModules/blankConfig.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ConfigModules/blankConfig.js");
});

routerModules.get("/ConfigModules/maintainConfig.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ConfigModules/maintainConfig.js");
});

routerModules.get("/WorkshopModules/showContent.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/WorkshopModules/showContent.js");
});

routerModules.get("/WorkshopModules/showButtons.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/WorkshopModules/showButtons.js");
});

routerModules.get("/modifyDataString.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/modifyDataString.js");
});

routerModules.get("/modifyDate.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/modifyDate.js");
});

routerModules.get("/ControlerLoginFirst/PushCompany.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ControlerLoginFirst/PushCompany.js"
  );
});

routerModules.get("/ControlerLoginFirst/AdjustCompany.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ControlerLoginFirst/AdjustCompany.js"
  );
});

routerModules.get("/ControlerLoginFirst/PushUnits.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ControlerLoginFirst/PushUnits.js");
});

routerModules.get("/ControlerLoginFirst/PushContacts.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ControlerLoginFirst/PushContacts.js"
  );
});

routerModules.get("/ControlerLoginFirst/AdjustContacts.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ControlerLoginFirst/AdjustContacts.js"
  );
});

routerModules.get("/ControlerLoginFirst/PushSchedule.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ControlerLoginFirst/PushSchedule.js"
  );
});

routerModules.get("/ControlerLoginFirst/AdjustSchedule.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ControlerLoginFirst/AdjustSchedule.js"
  );
});

routerModules.get("/InterviewModules/setResposta.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/setResposta.js");
});

routerModules.get("/InterviewModules/validaProject.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/validaProject.js");
});

routerModules.get("/InterviewModules/setRespostaProject.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/setRespostaProject.js");
});

routerModules.get("/InterviewModules/createAnswerProject.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/createAnswerProject.js");
});

routerModules.get("/InterviewModules/setMetaRealObj.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/InterviewModules/setMetaRealObj.js"
  );
});

routerModules.get("/InterviewModules/getResposta.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/getResposta.js");
});

routerModules.get("/InterviewModules/getMetaRealObj.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/InterviewModules/getMetaRealObj.js"
  );
});

routerModules.get("/InterviewModules/blankIndicador.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/InterviewModules/blankIndicador.js"
  );
});

routerModules.get("/InterviewModules/blankBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/blankBSC.js");
});

routerModules.get("/InterviewModules/eventsIndicador.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/InterviewModules/eventsIndicador.js"
  );
});

routerModules.get("/InterviewModules/eventsBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/eventsBSC.js");
});

routerModules.get("/InterviewModules/crudPlus.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudPlus.js");
});

routerModules.get("/InterviewModules/crudPlusInd.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudPlusInd.js");
});

routerModules.get("/InterviewModules/crudEditInd.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudEditInd.js");
});3

routerModules.get("/InterviewModules/crudDeleteInd.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudDeleteInd.js");
});

routerModules.get("/InterviewModules/crudPlusBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudPlusBSC.js");
});

routerModules.get("/InterviewModules/crudEditBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudEditBSC.js");
});

routerModules.get("/InterviewModules/crudDeleteBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/crudDeleteBSC.js");
});

routerModules.get("/InterviewModules/changeAnswer.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/changeAnswer.js");
});

routerModules.get("/InterviewModules/changeSelectBarrier.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/changeSelectBarrier.js");
});

routerModules.get("/InterviewModules/createAnswer.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/createAnswer.js");
});

routerModules.get("/InterviewModules/removeAnswerInd.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/removeAnswerInd.js");
});

routerModules.get("/InterviewModules/createAnswerInd.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/createAnswerInd.js");
});

routerModules.get("/InterviewModules/removeAnswerBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/removeAnswerBSC.js");
});

routerModules.get("/InterviewModules/createAnswerBSC.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/createAnswerBSC.js");
});

routerModules.get("/InterviewModules/temaShow.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/InterviewModules/temaShow.js");
});
/*========================================================*/

routerModules.get("/MainModules/OpenCompany.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/OpenCompany.js");
});

routerModules.get("/MainModules/CloseCompany.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/CloseCompany.js");
});

routerModules.get("/MainModules/CloseAllCompany.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/CloseAllCompany.js");
});

routerModules.get("/MainModules/NavsCompany.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/NavsCompany.js");
});

routerModules.get("/MainModules/OpersCompany.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/OpersCompany.js");
});

routerModules.get("/MainModules/CloseOpers.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/CloseOpers.js");
});

routerModules.get("/MainModules/SendIDcompany.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/SendIDcompany.js");
});

routerModules.get("/MainModules/CreateScheduleList.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/MainModules/CreateScheduleList.js"
  );
});

routerModules.get("/MainModules/CreateScheduleButton.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/MainModules/CreateScheduleButton.js"
  );
});

routerModules.get("/MainModules/EventScheduleButton.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/MainModules/EventScheduleButton.js"
  );
});

routerModules.get("/MainModules/DeleteScheduleButton.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/MainModules/DeleteScheduleButton.js"
  );
});

routerModules.get("/MainModules/ChangeColor.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/ChangeColor.js");
});

routerModules.get("/MainModules/ChangeOper.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/ChangeOper.js");
});

routerModules.get("/MainModules/getColor.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/MainModules/getColor.js");
});

/*=======================================================================================*/
routerModules.get("/ConsultancyModules/ConsultancyList.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/ConsultancyList.js"
  );
});

routerModules.get("/ConsultancyModules/ConsultantList.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/ConsultantList.js"
  );
});

routerModules.get("/ConsultancyModules/getConsultancy.js", (req, res) => {
  res.sendFile(
    process.cwd() + "/src/modules/ConsultancyModules/getConsultancy.js"
  );
});

/*=======================================================================================*/
routerModules.get("/Masks/telephone.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/Masks/telephone.js");
});

routerModules.get("/Masks/cnpj.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/Masks/cnpj.js");
});

routerModules.get("/Masks/cep.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/Masks/cep.js");
});

routerModules.get("/Masks/number.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/Masks/number.js");
});

/*=========================================================================================*/

routerModules.get("/ConCliModules/allowResponses.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ConCliModules/allowResponses.js");
});

routerModules.get("/ConCliModules/noneButton.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ConCliModules/noneButton.js");
});

routerModules.get("/ConCliModules/blockScreen.js", (req, res) => {
  res.sendFile(process.cwd() + "/src/modules/ConCliModules/blockScreen.js");
});

export { routerModules };
