import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

//! fetching all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

//! function to create a new product
export const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(API_URL, newProduct);
    return response.data;
  } catch (error) {
    console.log("Error creating product:", error);
    return { success: false, message: error.message };
  }
};

//! delete a product

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting product:", error);
    return { success: false, message: error.message };
  }
};

//! updating a product

export const updateProduct = async (id, updatedFields) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedFields, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("API Response Data:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.log("Error updating product: ", error);
    return { success: false, message: error.message };
  }
};
