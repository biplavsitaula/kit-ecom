import asyncHandler from "../../../utils/asyncHandler.js";
import {
  login as loginService,
  signup as signupService,
  forgotPasswordService,
  resetPasswordService,
} from "../service/auth.service.js";

export const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService({ email, password });
  res.status(200).json({ message: "Login successful", data });
});

export const signupController = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  const data = await signupService({ fullName, email, password });
  res.status(201).json({ message: "Signup successful", data });
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  await forgotPasswordService(email);
  res
    .statusCode(200)
    .json({ message: "OTP sent to your email", data: { email } });
});

export const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;

  await resetPasswordService({ email, otp, newPassword });
  res.statusCode(200).json({ message: "Reset password successful" });
});
