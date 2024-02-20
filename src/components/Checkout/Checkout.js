import React from "react";
import "../../styles/Checkout.css";
import Subtotal from "../Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user?.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal basket={basket} />
      </div>
    </div>
  );
};

export default Checkout;
