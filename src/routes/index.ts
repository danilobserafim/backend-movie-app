import { Router } from "express";
import { moviesRoutes } from "./MoviesRoute";

const routes = Router()


routes.use("/movies", moviesRoutes)

export {routes};