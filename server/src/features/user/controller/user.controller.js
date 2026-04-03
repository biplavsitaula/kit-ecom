import asyncHandler from "../../../utils/asyncHandler.js";
import userModel from "../user.model.js";
import { findOne } from "../../../services/common.js";

export const getMe = asyncHandler(async (req, res) => {
  const { email } = req.user;
  const data = await findOne(userModel, { email });
  res.status(200).json({ message: "User received successfully", data });
});
