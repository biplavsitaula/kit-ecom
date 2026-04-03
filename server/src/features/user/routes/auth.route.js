import express from "express";
import {
  forgotPassword,
  loginController,
  signupController,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/login", loginController);

router.post("/signup", signupController);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

export default router;
