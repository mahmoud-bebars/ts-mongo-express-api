import express from "express";
import http from "http";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import compression from "compression";
import cors from "cors";

import mongoose from "mongoose";

import router from "./router";

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `🚀  Server up & running on port:${PORT} at https://localhost:${PORT}`
  );
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("Mongo ERROR", (error: Error) => console.log(error));

app.use("/", router());
