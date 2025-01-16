import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config({});

import connectDB from "./database/db.js";
import userRoute from "./routes/user.routes.js";
import aiRoute from "./routes/ai.routes.js";
connectDB();

const Port = process.env.PORT || 3001;

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.use("/user", userRoute);
server.use("/ai", aiRoute);

server.listen(Port, () => {
  console.log(`Server is running on port - ${Port}`);
});