import { likedMovies } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { GetLikedMoviesDTO } from "./GetLikedMoviesDTO";
import { LikedMovieDTO } from "../LikeMovie/LikeMovieDTO";


type props = {

}
export class GetLikedMoviesUseCase {
    async execute({ id }: { id: string }): Promise<likedMovies[] | null> {
        const likedMovies = await prisma.likedMovies.findMany({
            include: {
                Ratings: {
                    select: {
                        Source: true,
                        Value: true
                    }
                }
            }, where: {
                imdbID: id
            },
            orderBy:{
                Title:"asc"
            }
        })
        return likedMovies;
    }
}