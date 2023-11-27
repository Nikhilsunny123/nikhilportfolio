import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const port = 3000;
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());

//admin
app.use("/admin/skills", adminMoviesRouter);
app.use("/admin/projects", adminMoviesRouter);

//user
app.use("/skills", userMoviesRouter);
app.use("/projects", userWatchListRouter);

app.listen(port, () => {
  console.log("server is running on", port);
});
