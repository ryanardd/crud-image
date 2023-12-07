import express from "express";
import productController from "../controller/product-controller";

export const route = express.Router();

route.get("/products", productController.getProduct);

route.get("/products/:id", productController.getProductId);

route.post("/products", productController.saveProduct);

route.patch("/products/:id", productController.updateProduct);

route.delete("/products/:id", productController.deleteProduct);
