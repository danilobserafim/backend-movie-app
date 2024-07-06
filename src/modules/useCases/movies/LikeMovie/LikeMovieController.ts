import { LikeMovieUseCase } from "./LikeMovieUseCase";
import { Request, Response } from "express";

export class LikeMovieController{
    async handle(req:Request, res: Response){

        const movie = req.body;

        const likeMovieUseCase = new LikeMovieUseCase()

        const result = await likeMovieUseCase.execute(movie)
        
        return res.status(201).json(result)
    }
}