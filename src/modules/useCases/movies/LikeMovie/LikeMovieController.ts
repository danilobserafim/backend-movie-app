import { MovieDTO } from "../DTO";
import { LikeMovieUseCase } from "./LikeMovieUseCase";
import { NextFunction, Request, Response } from "express";

type props ={
    movie: MovieDTO
}

export class LikeMovieController{
    async handle(req:Request, res: Response, next:NextFunction){

        const movie:MovieDTO = req.body;

        const likeMovieUseCase = new LikeMovieUseCase()

        const result = await likeMovieUseCase.execute(movie)
        
        return res.status(201).json(result)
    }
}