import express from "express";
// import Product from "../models/product.model.js";
// import mongoose from "mongoose";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product.controller.js";


const router = express.Router();

//! Reading
router.get("/", getProducts)

//! Creating
router.post("/", createProducts) 

//! Updating
router.put("/:id", updateProducts)

//! Deleting
router.delete("/:id", deleteProducts)


export default router;