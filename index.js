import express from "express";
import { config } from "dotenv";

export const app = express();
config({
  path: "./.env",
});
