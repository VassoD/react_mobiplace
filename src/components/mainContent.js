import React from 'react'
import product_card from "../data/product_data";
import {useCart} from "react-use-cart";

const MainContent = () => {
    const {addItem} = useCart();
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.picture} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn" onClick={() => addItem(item)}>Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            {/* <h3>Mobiles</h3> */}
            {listItems}
            {addItem}
        </div>
    )
}
export default MainContent;
