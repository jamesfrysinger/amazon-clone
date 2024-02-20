import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  let [products, setProducts] = useState([]);

  const productItem = (productFetch) => {
    productFetch.then((prod) => {
      setProducts(prod);
    });
  };

  useEffect(() => {
    const productFetch = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => data);

    productItem(productFetch);
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71d+zmYM5LL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          {products.slice(0, 2).map((prod) => {
            return (
              <Product
                id={prod.id}
                title={prod.title}
                price={prod.price}
                image={prod.image}
                rating={Math.round(prod.rating["rate"])}
                key={prod.id}
              />
            );
          })}
        </div>
        <div className="home__row">
          {products.slice(2, 5).map((prod) => {
            return (
              <Product
                id={prod.id}
                title={prod.title}
                price={prod.price}
                image={prod.image}
                rating={Math.round(prod.rating["rate"])}
                key={prod.id}
              />
            );
          })}
        </div>
        <div className="home__row">
          {products.slice(5, 6).map((prod) => {
            return (
              <Product
                id={prod.id}
                title={prod.title}
                price={prod.price}
                image={prod.image}
                rating={Math.round(prod.rating["rate"])}
                key={prod.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
