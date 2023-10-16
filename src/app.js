import express from "express";
import routes from "./routes/route.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes)
app.use((error,req,res,next)=>{
    res.status(error.httpStatusCode).json("Bad Request");
 });


export default app

