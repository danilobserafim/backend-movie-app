import { GetLeadUseCase } from "./GetLeadUseCase";
import { Request, Response } from "express";

export class GetLeadController{
    async handle(req:Request, res: Response){

        const getUseCase = new GetLeadUseCase()

        const result = await getUseCase.execute()
        
        return res.status(201).json(result)
    }
}