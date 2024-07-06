import { Lead, likedMovies } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { GetLikedMovieDTO } from "./GetLikedMovieDTO";
import { LikedMovieDTO } from "../LikeMovie/LikeMovieDTO";


type props = {
    
}
export class GetLikedMovieUseCase{
    async execute({id}:{id:string}): Promise<likedMovies | null>{ 
        const likedMovies = await prisma.likedMovies.findFirst({where:{
            imdbID: id
        }})
        return likedMovies;
    }
}