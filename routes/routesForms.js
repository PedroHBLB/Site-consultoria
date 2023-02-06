import { controlerInfoConsultancyCreate, controlerInfoConsultancyEdit, controlerInfoConsultancyDelete } from "../src/controllers/Consultancy/consultancyFormInfoController.js";
import { controlerConsultantsConsultancyCreate, controlerConsultantsConsultancyEdit, controlerConsultantsConsultancyDelete } from "../src/controllers/Consultancy/consultancyFormConsultantController.js";
import { controlerInfoClientCreate, controlerInfoClientEdit, controlerInfoClientDelete } from "../src/controllers/Clientt/clientFormInfoController.js";
import { controlerUnitsClientCreate, controlerUnitsClientEdit, controlerUnitsClientDelete } from "../src/controllers/Clientt/clientFormUnitsController.js";
import { controlerContactsClientCreate, controlerContactsClientEdit,  controlerContactsClientDelete} from "../src/controllers/Clientt/clientFormContactsController.js";
import { controlerScheduleClientCreate, controlerScheduleClientEdit,  controlerScheduleClientDelete} from "../src/controllers/Clientt/clientFormScheduleController.js";
import { controlerVersionConfigCreate, controlerVersionConfigEdit,  controlerVersionConfigDelete} from "../src/controllers/Configg/configFormVersionController.js";
import { controlerOperConfigCreate, controlerOperConfigEdit,  controlerOperConfigDelete } from "../src/controllers/Configg/configFormOperController.js";
import { controlerTaskConfigCreate, controlerTaskConfigEdit,  controlerTaskConfigDelete} from "../src/controllers/Configg/configFormTaskController.js";
import { controlerActivitiesWorkshopCreate, controlerActivitiesWorkshopEdit, controlerActivitiesWorkshopDelete} from "../src/controllers/Workshop/workshopFormActivitiesController.js";
import { controlerPadraentrevistaWorkshopCreate, controlerPadraentrevistaWorkshopEdit, controlerPadraentrevistaWorkshopDelete} from "../src/controllers/Workshop/workshopFormPadraoentrevistaController.js";
import { controlerRespentrevista } from "../src/controllers/Respentrevista/respentrevistaController.js";
import { controlerFileCreate, controlerFileDelete } from "../src/controllers/Files/fileController.js";
import { controlerAnotCreate, controlerAnotEdit, controlerAnotDelete } from "../src/controllers/Annotations/annotationController.js";
import { controlerPermissiongEdit } from "../src/controllers/Configg/configFormPermissionController.js"
import upload from '../src/modules/Multer/multerConfig.js';
import uploadFile from '../src/modules/Multer/multerFile.js';

import express from "express";

const routerForm = express.Router();


routerForm.post("/CreateConsultancyInfo", controlerInfoConsultancyCreate);

routerForm.post("/CreateConsultancyConsultants", controlerConsultantsConsultancyCreate);

routerForm.post("/CreateClientInfo", controlerInfoClientCreate)

routerForm.post("/CreateClientUnits", controlerUnitsClientCreate)

routerForm.post("/CreateClientContacts", controlerContactsClientCreate)

routerForm.post("/CreateClientSchedule", controlerScheduleClientCreate)

routerForm.post("/EditConsultancyInfo", controlerInfoConsultancyEdit)

routerForm.post("/EditConsultancyConsultants", controlerConsultantsConsultancyEdit);

routerForm.post("/EditClientInfo", controlerInfoClientEdit)

routerForm.post("/EditClientUnits", controlerUnitsClientEdit)

routerForm.post("/EditClientContacts", controlerContactsClientEdit)

routerForm.post("/EditClientSchedule", controlerScheduleClientEdit)

routerForm.post("/DeleteConsultancyInfo", controlerInfoConsultancyDelete)

routerForm.post("/DeleteConsultancyConsultants", controlerConsultantsConsultancyDelete);

routerForm.post("/DeleteClientInfo", controlerInfoClientDelete)

routerForm.post("/DeleteClientUnits", controlerUnitsClientDelete)

routerForm.post("/DeleteClientContacts", controlerContactsClientDelete)
  
routerForm.post("/DeleteClientSchedule", controlerScheduleClientDelete)

routerForm.post("/CreateConfigVersion", controlerVersionConfigCreate)

routerForm.post("/CreateConfigOper", controlerOperConfigCreate)

routerForm.post("/CreateConfigTask", controlerTaskConfigCreate)

routerForm.post("/EditConfigVersion", controlerVersionConfigEdit)

routerForm.post("/EditConfigOper", controlerOperConfigEdit)

routerForm.post("/EditConfigTask", controlerTaskConfigEdit)

routerForm.post("/DeleteConfigVersion", controlerVersionConfigDelete)

routerForm.post("/DeleteConfigOper", controlerOperConfigDelete)

routerForm.post("/DeleteConfigTask", controlerTaskConfigDelete)

routerForm.post("/CreateWorkshopActvities", controlerActivitiesWorkshopCreate)

routerForm.post("/EditWorkshopActvities", controlerActivitiesWorkshopEdit)

routerForm.post("/DeleteWorkshopActvities", controlerActivitiesWorkshopDelete)

routerForm.post("/CreateWorkshopPadraoEntrevista", upload.single('FILENAME'), controlerPadraentrevistaWorkshopCreate)

routerForm.post("/EditWorkshopPadraoEntrevista",  upload.single('FILENAME'), controlerPadraentrevistaWorkshopEdit)

routerForm.post("/DeleteWorkshopPadraoEntrevista",  upload.single('FILENAME'), controlerPadraentrevistaWorkshopDelete)

routerForm.post("/Respentrevistas", controlerRespentrevista)

routerForm.post("/CreateFile", uploadFile.single('FILENAME') ,controlerFileCreate)

routerForm.post("/DeleteFile" ,controlerFileDelete)

routerForm.post("/CreateAnot" ,controlerAnotCreate)

routerForm.post("/EditAnot", controlerAnotEdit)

routerForm.post("/DeleteAnot", controlerAnotDelete)

routerForm.post("/EditPermission", controlerPermissiongEdit)

export { routerForm };
