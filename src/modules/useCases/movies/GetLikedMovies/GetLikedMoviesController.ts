import { GetLikedMoviesUseCase } from "./GetLikedMoviesUseCase";
import { Request, Response } from "express";

export class GetLikedMoviesController{
    async handle(req:Request, res: Response){
        const {id} = req.params

        const getLikedMoviesUseCase = new GetLikedMoviesUseCase()

        const result = await getLikedMoviesUseCase.execute({id})
        
        return res.status(201).json(result)
    }
}