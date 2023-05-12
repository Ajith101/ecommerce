import React from "react";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import HomePage from "./components/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products/:id" element={<SinglePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
