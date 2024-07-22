import React from "react";
import product_card from "../data/product_data";

const ProductCard = ({ item }) => (
  <div className="card" key={item.id}>
    <div className="card_img">
      <img src={item.thumb} alt={item.product_name} />
    </div>
    <div className="card_header">
      <h2>{item.product_name}</h2>
      <p>{item.description}</p>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <section className="main_content">
      <h3>Mobiles</h3>
      <div className="product-list">
        {product_card.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MainContent;
