import express from "express";
import { login, signUp } from "../controllers/userController.js";
const router = express.Router();

// user signup route
router.post("/signup", signUp);

// user login route
router.post("/login", login);

export default router;
