import { Router } from "express";
import { CreateLeadController } from "../modules/useCases/leads/createLead/CreateLeadController";
import { GetLeadController } from "../modules/useCases/leads/getLeads/GetLeadController";

const createLeadController = new CreateLeadController();
const getLeadController = new GetLeadController();

const leadRoutes = Router()

leadRoutes.post("/", createLeadController.handle)
leadRoutes.get("/", getLeadController.handle)


export { leadRoutes }