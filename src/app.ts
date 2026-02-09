import express from "express";
import routes from "./routes/route";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api",routes);
app.use((error:any,req: express.Request,res: express.Response,next: express.NextFunction)=>{
    const statusCode = error.httpStatusCode || 500;
    const message = error.message || "Internal Server Error";

    res.status(statusCode).json({
        message: message,
        error: process.env.NODE_ENV === "development" ? error : {}
    });
 });


export default app

