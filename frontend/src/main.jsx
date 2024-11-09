import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../store/product.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="dark"  />
        <App />
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
