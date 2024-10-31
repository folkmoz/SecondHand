import express from "express";
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  getProductsByOwner,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";
const productRouter = express.Router();

productRouter.post(
  "/add",
  userAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);
productRouter.get("/owner", userAuth, getProductsByOwner);

export default productRouter;
