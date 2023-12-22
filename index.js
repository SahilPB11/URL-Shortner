import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import urlRouter from "./routes/Url.js";
import { errorMiddleware } from "./middlewares/error.js";
import isAuthenticated from "./middlewares/Authenticated.js";
export const app = express();
config({
  path: "./.env",
});

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/user", userRouter);
app.use("/url", isAuthenticated, urlRouter);

// error handler middleware
app.use(errorMiddleware);
