import { GetLikedMovieUseCase } from "./GetLikedMovieUseCase";
import { NextFunction, Request, Response } from "express";

export class GetLikedMovieController{
    async handle(req:Request, res: Response, next:NextFunction){
        const {id} = req.params

        const getLikedMoviesUseCase = new GetLikedMovieUseCase()

        const result = await getLikedMoviesUseCase.execute({id})
        
        return res.status(200).json(result)
    }
}