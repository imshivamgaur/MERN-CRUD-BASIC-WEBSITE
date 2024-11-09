import React, { useState } from "react";
import { createProduct, fetchProducts } from "../../api";
import { useProductStore } from "../../store/product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePage = ({ colorMode }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { setProducts } = useProductStore();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //! calling the API function to create the product
    const result = await createProduct(newProduct);

    console.log(
      "this is the result returned from createProduct fucntion",
      result
    );

    if (result.success) {
      setSuccess(true);
      setError(null);
      setNewProduct({ name: "", price: "", image: "" });

      // after successfully adding the product, refetch the products list and update the state
      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts.data);

      // Show success toast notificationtoast.success("Product added successfully!");
      toast.success("Product added successfully!✨")
      
    } else {
      setError(result.message);
      setSuccess(false);

      // Show error toast notification
      toast.error("Error to add product!");
    }

    console.log(newProduct);
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <>
      <div className="w-full p-10 flex justify-center">
        <div className="w-[1140px] flex flex-col gap-10 items-center">
          <h1
            className={`text-4xl font-semibold ${
              colorMode === "dark" ? "text-white" : "text-black"
            }`}
          >
            Create new Product
          </h1>
          <div
            className={`${
              colorMode === "dark"
                ? "bg-gray-800 text-white font-semibold"
                : "bg-gray-300 text-black font-semibold "
            } shadow-md shadow-[#00000054] transition-all duration-[.3s] p-10   flex flex-col gap-6 rounded-lg items-center`}
          >
            <form
              onSubmit={handleFormSubmit}
              className={`bg-transparent flex flex-col gap-6  items-center`}
            >
              <input
                className={`px-3 py-2 rounded-md outline-none bg-transparent border-[2px] w-[300px] border-gray-500  `}
                placeholder="Product Name"
                required
                name="name"
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <input
                className={`px-3 py-2 rounded-md outline-none  w-[300px] bg-transparent border-[2px] border-gray-500 `}
                placeholder="price"
                required
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <input
                className={`px-3 py-2 rounded-md outline-none w-[300px] bg-transparent border-[2px] border-gray-500 `}
                placeholder="Image URL"
                required
                name="image"
                type="text"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <button
                type="submit"
                className="bg-orange-800 hover:bg-orange-700 active:bg-orange-800 px-8 py-2 font-semibold text-xl rounded-md text-white "
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
      j
    </>
  );
};

export default CreatePage;
