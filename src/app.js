import express from "express";
import routes from "./routes/route.js";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs/mlbb.docs.json" assert { type: "json" };

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/v1/docs', swaggerUi.serve , swaggerUi.setup(swaggerDocs))
app.use(routes)
app.use((error,req,res,next)=>{
    res.status(error.httpStatusCode).json("Bad Request");
 });


export default app

