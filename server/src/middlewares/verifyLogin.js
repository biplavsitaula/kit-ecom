import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

// Middleware to verify JWT token
export const verifyLogin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Unauthorized", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    // Token expired or invalid
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token", error: err.message });
  }
};
