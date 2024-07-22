import React from "react";
import product_card from "../data/product_data";
import Likes from "../Likes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../utils/cartContext";

function Products() {
  const { addToCart } = useCart();

  const productItems = product_card.map((item) => {
    const searchYoutubeQuery = item.product_name.replace(" ", "+");
    const searchYoutubeUrl = `https://www.youtube.com/results?search_query=${searchYoutubeQuery}`;

    return (
      <div className="card" key={item.id}>
        <a href={searchYoutubeUrl} target="_blank" rel="noreferrer">
          <div className="card_img">
            <img src={item.picture} alt={item.product_name} />
          </div>
        </a>
        <div className="card_header">
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>
          <Likes />
          <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return <div className="main_content">{productItems}</div>;
}

export default Products;
