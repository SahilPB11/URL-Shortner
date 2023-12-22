import express from "express";
import { getOrignalUrl, newShortUrl } from "../controllers/urlContoller.js";
const router = express.Router();

// for creating a new url
router.post("/new", newShortUrl);

// to get origanl url with the help of shortid
router.get("/getUrl/:shortId", getOrignalUrl);

export default router;
