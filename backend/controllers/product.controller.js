import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const createProducts = async(req, res) => {
  const product = req.body;   //user will send this data
  console.log(req.body);
  
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }
  
  const newProducts = new Product(product);
  
  try {
    await newProducts.save();
    res.status(201).json({ success: true, data: newProducts });
  } catch (error) {
    console.log("Error in Create Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const updateProducts = async (req, res) => {
  const { id } = req.params;

  const product = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" }); 
  }
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({success: false, message: "Product not found"})
    }
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({success: false, message: "Server Error"})
  }
}

export const deleteProducts = async(req, res) => {
  const { id } = req.params;
  console.log("id:", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" }); 
  }
  
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product Deleted" })
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}