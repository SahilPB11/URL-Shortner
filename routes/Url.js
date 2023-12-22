import express from "express";
import { newShortUrl } from "../controllers/urlContoller.js";
const router = express.Router();

router.post("/new", newShortUrl);

export default router;
