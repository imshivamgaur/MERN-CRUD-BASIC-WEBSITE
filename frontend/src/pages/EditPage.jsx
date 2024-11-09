import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/product";
import { updateProduct, fetchProducts } from "../../api";
import { toast } from "react-toastify";

const EditPage = ({ colorMode }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({ name: "", price: "", image: "" });
  const { products, setProducts } = useProductStore();

  // Fetch product by ID and set it to state
  useEffect(() => {
    const productToEdit = products.find((prod) => prod._id === id);

    if (productToEdit) {
      setProduct(productToEdit); // Set the product data in the form
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Product not found.");
    }
  }, [id, products]);

  // console.log(product);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {
      name: product.name,
      price: product.price,
      image: product.image,
    };

    const result = await updateProduct(id, updatedFields);
    if (result.success) {
      toast.success("Product updated successfully!");

      // Update the product in the ProductProvider context
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p._id === id ? { ...p, ...updatedFields } : p))
      );
    } else {
      toast.error(result.message || "Error updating product.");
    }
  };

  if (loading) return <div>Loading...</div>; // Loading indicator

  return (
    <div className="w-full p-10 flex justify-center">
      <div className="w-[1140px] flex flex-col gap-10 items-center">
        <h1
          className={`text-4xl font-semibold ${
            colorMode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Edit Product
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className={`${
            colorMode === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-black"
          } shadow-md shadow-[#00000054] transition-all duration-[.3s] p-10 rounded-lg flex flex-col gap-6`}
        >
          <input
            type="text"
            name="name"
            value={product.name}
            required
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="px-3 py-2 rounded-md outline-none bg-transparent border-[2px] w-[300px] border-gray-500 "
            placeholder="Product Name"
          />
          <input
            type="number"
            name="price"
            value={product.price}
            required
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="px-3 py-2 rounded-md outline-none bg-transparent border-[2px] w-[300px] border-gray-500 "
            placeholder="Price"
          />
          <input
            type="text"
            name="image"
            value={product.image}
            required
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            className="px-3 py-2 rounded-md outline-none bg-transparent border-[2px] w-[300px] border-gray-500 "
            placeholder="Image URL"
          />
          <button
            type="submit"
            className="bg-orange-800 hover:bg-orange-700 active:bg-orange-800 px-8 py-2 font-semibold text-xl rounded-md text-white"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
