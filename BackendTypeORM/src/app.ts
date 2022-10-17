import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as bodyParser from "body-parser";
import userRoutes from "../src/routes/registerRoutes";
import userLogin from "../src/routes/logRouters";
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());


app.use("/reg", userRoutes);
app.use("/auth", userLogin);

export default app;
