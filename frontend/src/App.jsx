import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

const App = () => {
  const [colorMode, setColorMode] = useState(() => {
    // Retreive the colorMode from localStorage or default to "dark"
    return localStorage.getItem("colorMode" || "dark");
  });

  // toggle color mode between light and dark
  const toggleColorMode = () => {
    setColorMode((prevMode) => {
      
      const newMode = prevMode === "dark" ? "light" : "dark";
      //save the new colorMode to localStorage
      localStorage.setItem("colorMode", newMode);
      return newMode;
    });
  };

  return (
    <>
      <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <div
        className={`min-h-[100vh] ${
          colorMode === "dark" ? "bg-gray-900" : "bg-gray-200"
        } duration-[.3s] `}
      >
        <Routes>
          <Route path="/" element={<HomePage colorMode={colorMode} />} />
          <Route
            path="/create"
            element={<CreatePage colorMode={colorMode} />}
          />
          <Route
            path="/edit/:id"
            element={<EditPage colorMode={colorMode} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
