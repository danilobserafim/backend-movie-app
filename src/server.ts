import "express-async-errors"
import morgan from "morgan";
import cors from "cors";
import express,{NextFunction, Request, Response} from "express";
import { routes } from "./routes";
import dotenv from "dotenv";
import { AppErrors } from "./erros/ApprErrors";

const app = express()

dotenv.config()
app.use(cors({origin:  "*"}))
app.use(express.json())
app.use(morgan("dev"))

app.use(routes)

app.use((err: Error, req: Request, res:Response)=>{
    if (err instanceof AppErrors) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message
        })
    }
    return res.status(500).json({
        statusCode: 500,
        message: "Internal server error!"
    })
})
app.listen(3333, () => {
    console.log("Api funcionando");

})
