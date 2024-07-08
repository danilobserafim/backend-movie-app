import { GetLikedMoviesUseCase } from "./GetLikedMoviesUseCase";
import { NextFunction, Request, Response } from "express";

export class GetLikedMoviesController{
    async handle(req:Request, res: Response, next:NextFunction){
        const {id} = req.params

        const getLikedMoviesUseCase = new GetLikedMoviesUseCase()

        const result = await getLikedMoviesUseCase.execute({id})
        
        return res.status(200).json(result)
    }
}