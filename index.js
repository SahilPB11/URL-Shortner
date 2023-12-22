import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/user";
export const app = express();
config({
  path: "./.env",
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/user", router);
