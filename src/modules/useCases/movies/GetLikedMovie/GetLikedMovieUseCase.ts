import { likedMovies } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { GetLikedMovieDTO } from "./GetLikedMovieDTO";
import { LikedMovieDTO } from "../LikeMovie/LikeMovieDTO";


type props = {
    
}
export class GetLikedMovieUseCase{
    async execute({id}:{id:string}): Promise<likedMovies | null>{ 
        const likedMovies = await prisma.likedMovies.findFirst({include:{
            Ratings:{
                select:{
                    Source:true,
                    Value:true
                }
            }
        }, where:{
            imdbID: id
        }})
        return likedMovies;
    }
}