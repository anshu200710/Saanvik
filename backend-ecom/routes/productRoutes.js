import express from "express";
import multer from "multer";
import { getProducts, getProductById, addProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temporary storage

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", upload.single("image"), addProduct);
router.delete("/:id", deleteProduct);

export default router;
