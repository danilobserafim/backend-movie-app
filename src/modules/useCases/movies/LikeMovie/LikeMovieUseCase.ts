import { likedMovies } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { MovieDTO } from "../DTO";

export class LikeMovieUseCase {
    async execute(movie: MovieDTO): Promise<likedMovies> {
        try {
            const like = await prisma.likedMovies.create({
                data: {
                    Actors: movie.Actors,
                    Awards: movie.Awards,
                    BoxOffice: movie.BoxOffice,
                    Country: movie.Country,
                    Director: movie.Director,
                    DVD: movie.DVD,
                    Genre: movie.Genre,
                    imdbID: movie.imdbID,
                    imdbRating: movie.imdbRating,
                    imdbVotes: movie.imdbVotes,
                    Language: movie.Language,
                    Metascore: movie.Metascore,
                    Plot: movie.Plot,
                    Poster: movie.Poster,
                    Production: movie.Production,
                    Rated: movie.Rated,
                    Released: movie.Released,
                    Response: movie.Response,
                    Runtime: movie.Runtime,
                    Title: movie.Title,
                    totalSeasons: movie.totalSeasons,
                    Type: movie.Type,
                    Website: movie.Website,
                    Writer: movie.Writer,
                    Year: movie.Year,
                    Ratings: {
                        createMany: {
                            data: movie.Ratings
                        }
                    }
                }
            })
            return like;
        } catch (error) {
            const response = await prisma.likedMovies.delete({where: {imdbID: movie.imdbID}})
            return response
        }
    }
}