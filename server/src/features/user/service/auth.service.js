import AppError from "../../../utils/AppError.js";
import userModel from "../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../utils/jwtUtils.js";

export const verifyPasswordAndGenerateTokens = async (password, user) => {
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const accessToken = generateAccessToken({ _id: user._id, email: user.email });
  const refreshToken = generateRefreshToken({
    _id: user._id,
    email: user.email,
  });

  return {
    accessToken,
    refreshToken,
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  };
};

export const login = async ({ email, password }) => {
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) throw new AppError("Invalid email or password", 401);

  const res = await verifyPasswordAndGenerateTokens(password, user);

  return res;
};

export const signup = async ({ fullName, email, password }) => {
  const existingUser = await getUserByEmail(email);
  if (existingUser) throw new AppError("Email already registered", 400);

  const user = await createOne(userModel, { fullName, email, password });

  return {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
  };
};

const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

export const forgotPasswordService = async (email) => {
  const user = await userModel.findOne({ email });

  if (!user) throw new AppError("User not found", 400);

  const otp = generateOtp();

  user.otp = otp;
  user.otpExpires = Date.now() + 5 * 60 * 1000;

  await user.save();

  await sendEmail({
    to: user.email,
    subject: "OTP Code",
    text: `Your OTP is ${otp}, Expires in 5 minutes.`,
  });

  return { message: "OTP sent" };
};

export const resetPasswordService = async ({ email, otp, newPassword }) => {
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) throw new Error("Invalid email or OTP");

  if (!user.otpExpires || user.otpExpires < Date.now()) {
    throw new AppError("OTP expired", 400);
  }

  const isValidOtp = await user.compareOtp(otp);

  if (!isValidOtp) {
    throw new AppError("Invalid OTP", 400);
  }

  user.password = newPassword;

  user.otp = null;
  user.otpExpires = null;

  await user.save(); // hashes password

  return { message: "Password reset successful" };
};
