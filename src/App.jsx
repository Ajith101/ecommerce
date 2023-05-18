import React from "react";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import HomePage from "./components/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import CartList from "./components/cart/CartList";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/products/:id" element={<SinglePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
