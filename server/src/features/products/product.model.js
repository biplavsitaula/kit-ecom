import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    moq: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
