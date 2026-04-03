import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const generateAccessToken = (data) => {
  const token = jwt.sign(data, env.ACCESS_TOKEN, {
    expiresIn: env.ACCESS_TOKEN_TIME,
  });
  return token;
};

export const generateRefreshToken = (data) => {
  const token = jwt.sign(data, env.REFRESH_TOKEN, {
    expiresIn: env.REFRESH_TOKEN_TIME,
  });
  return token;
};
