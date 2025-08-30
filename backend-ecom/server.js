import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
connectCloudinary(); // 👈 must call this

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("API is working...");
});

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server running on port http://localhost:${process.env.PORT || 5000}`);
// });


export default app;
