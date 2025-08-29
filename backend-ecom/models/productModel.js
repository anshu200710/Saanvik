import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
}, { timestamps: true });

const productModel = mongoose.model("Product", productSchema);
export default productModel;
