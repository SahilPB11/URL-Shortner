import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
export const app = express();
config({
  path: "./.env",
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
