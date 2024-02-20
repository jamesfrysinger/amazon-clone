import React, { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import Payment from "./components/Checkout/Payment";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as path from "./Paths";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MJir5Lciap6ONt1UoG8DjkBuhsXhKSysFNNdDzDNt9GVDLxjrSqk4L3EiJzT1uZsVi5uSrgjeUtH3hiagj9XoKX00zOwsw2F8"
);
function App() {
  const [dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path={path.LOGIN} element={<Login />} />
            <Route
              path={path.CHECKOUT}
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path={path.HOME}
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path={path.PAYMENT}
              element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
