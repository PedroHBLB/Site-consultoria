import express from "express";
import { controlerMain } from "../src/controllers/Main/mainController.js";
import {  controlerStartLogin,  controlerTryLogin} from "../src/controllers/Login/loginController.js";
import { controlerClient } from "../src/controllers/Clientt/clientController.js";
import { controlerConsultancy } from "../src/controllers/Consultancy/consultancyController.js";
import { controlerConfig } from "../src/controllers/Configg/configController.js";
import { controlerBenchCompany } from "../src/controllers/BenchCompany/benchCompanyController.js";
import { controlerBenchIndustry } from "../src/controllers/BenchIndustry/benchIndustryController.js";
import { controlerWorkshop } from "../src/controllers/Workshop/workshopController.js";
import { controlerInterview } from "../src/controllers/Interview/interviewController.js";

const routerBase = express.Router();


routerBase.get("/", controlerStartLogin);

routerBase.get("/main", controlerMain);

routerBase.post("/main", controlerTryLogin);

routerBase.get("/industry", controlerBenchIndustry)

routerBase.get("/company", controlerBenchCompany)

routerBase.get("/consultancy", controlerConsultancy);

routerBase.get("/client", controlerClient);

routerBase.get("/configuration", controlerConfig)

routerBase.get("/workshop", controlerWorkshop)

routerBase.post("/interview", controlerInterview)

export { routerBase };
