import db from "./src/config/database.js";
import app from "./src/app.js";
import { PORT } from './src/config/env'

db.sync(() => console.log(`connected database`));

app.listen(PORT, () => console.log("server started"));
