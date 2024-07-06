import { Router } from "express";
import { leadRoutes } from "./LeadRoute";
import { moviesRoutes } from "./MoviesRoute";

const routes = Router()


routes.use("/leads", leadRoutes)
routes.use("/movies", moviesRoutes)

export {routes};