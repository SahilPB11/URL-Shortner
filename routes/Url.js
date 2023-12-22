import express from "express";
import { getOrignalUrl, newShortUrl } from "../controllers/urlContoller.js";
const router = express.Router();

router.post("/new", newShortUrl);

router.get("/getUrl/:shortId", getOrignalUrl);

export default router;
