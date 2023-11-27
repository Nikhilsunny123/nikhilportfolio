import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";

import adminProjectsRouter from "./routes/admin/adminProjectsRouter";
import connectDB from "./db";
import adminSkillsRouter from "./routes/admin/adminSkillsRouter";

const app = express();

dotenv.config();
const port = 3000;
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());

//admin
app.use("/skills", adminSkillsRouter);
app.use("/projects", adminProjectsRouter);


app.listen(port, () => {
  console.log("server is running on", port);
});
