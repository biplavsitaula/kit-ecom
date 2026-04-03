import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  console.log("connecting to db...");
  try {
    await mongoose.connect(env.DB);
    console.log("db connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
