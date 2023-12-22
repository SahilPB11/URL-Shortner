import express from "express";
import { login, logout, signUp } from "../controllers/userController.js";
const router = express.Router();

// user signup route
router.post("/signup", signUp);

// user login route
router.post("/login", login);

// user Logout
router.get("/logout", logout);

export default router;
