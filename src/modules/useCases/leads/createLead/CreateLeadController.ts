import { CreateLeadUseCase } from "./CreateLeadUseCase";
import { Request, Response } from "express";

export class CreateLeadController{
    async handle(req:Request, res: Response){

        const {name, email}:any = req.body;

        const createUseCase = new CreateLeadUseCase()

        const result = await createUseCase.execute({name, email})
        
        return res.status(201).json(result)
    }
}