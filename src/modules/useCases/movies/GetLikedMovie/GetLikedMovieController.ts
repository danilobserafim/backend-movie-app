import { GetLikedMovieUseCase } from "./GetLikedMovieUseCase";
import { Request, Response } from "express";

export class GetLikedMovieController{
    async handle(req:Request, res: Response){
        const {id} = req.params

        const getLikedMoviesUseCase = new GetLikedMovieUseCase()

        const result = await getLikedMoviesUseCase.execute({id})
        
        return res.status(201).json(result)
    }
}