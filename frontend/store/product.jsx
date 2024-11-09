import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../api";

// creating the context
const ProductContext = createContext();

// create a custom hook to use the productContext

export const useProductStore = () => useContext(ProductContext);

// create the provider component
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      if (data && data.success) {
        setProducts(data.data);
      }
    };
    loadProducts();
  },[]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
