import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },

    otp: String,
    otpExpires: Date,
  },
  { timestamps: true },
);

// 🔐 Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// 🔐 Hash OTP
userSchema.pre("save", async function (next) {
  if (!this.isModified("otp") || !this.otp) return next();
  this.otp = await bcrypt.hash(this.otp, 10);
  next();
});

// ✅ Compare password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// ✅ Compare OTP
userSchema.methods.compareOtp = function (otp) {
  return bcrypt.compare(otp, this.otp);
};

export default mongoose.model("User", userSchema);
