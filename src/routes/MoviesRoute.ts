import { Router } from "express";
import { LikeMovieController } from "../modules/useCases/movies/LikeMovie/LikeMovieController";
import { GetLikedMovieController } from "../modules/useCases/movies/GetLikedMovie/GetLikedMovieController";
import { GetLikedMoviesController } from "../modules/useCases/movies/GetLikedMovies/GetLikedMoviesController";

const likeMovieController = new LikeMovieController();
const getLikedMovieController = new GetLikedMovieController();
const getLikedMoviesController = new GetLikedMoviesController();


const moviesRoutes = Router()

moviesRoutes.post("/", likeMovieController.handle)
moviesRoutes.get("/:id", getLikedMovieController.handle)
moviesRoutes.get("/", getLikedMoviesController.handle)


export { moviesRoutes }