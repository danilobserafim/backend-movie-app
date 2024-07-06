import { Lead, likedMovies } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { LikedMovieDTO } from "./LikeMovieDTO";
import { AppErrors } from "../../../../erros/ApprErrors";

export class LikeMovieUseCase {
    async execute(movie: LikedMovieDTO): Promise<likedMovies> {
        try {
            const like = await prisma.likedMovies.create({
                data:
                {
                    Title: movie.Title,
                    Year: movie.Year,
                    Rated: movie.Rated,
                    Released: movie.Released,
                    Runtime: movie.Runtime,
                    Genre: movie.Genre,
                    Director: movie.Director,
                    Writer: movie.Writer,
                    Actors: movie.Actors,
                    Plot: movie.Plot,
                    Language: movie.Language,
                    Country: movie.Country,
                    Awards: movie.Awards,
                    Poster: movie.Poster,
                    Metascore: movie.Metascore,
                    imdbRating: movie.imdbRating,
                    imdbVotes: movie.imdbVotes,
                    imdbID: movie.imdbID,
                    Type: movie.Type,
                    totalSeasons: movie.totalSeasons,
                    Response: movie.Response
                }
            })
            movie.Ratings.map(async rating=>{
                await prisma.ratingsMovies.create({data:{
                    Source: rating.Source,
                    Value: rating.Value,
                    movieId: like.id
                }})
            })
            return like;
        } catch (error) {
            const unliked = prisma.likedMovies.delete({ where: { imdbID: movie.imdbID } })
            return unliked
        }

    }
}