import React from 'react'
import product_card from "../data/product_data";
import {useCart} from "react-use-cart";

const MainContent = () => {
    const {addItem} = useCart();
    const listItems = product_card.map((item) =>{
        const searchYoutube = "https://www.youtube.com/results?search_query="+item.product_name.replace(" ","+");
        return <div className="card" key={item.id}>
            <a href={searchYoutube}><div className="card_img">
                <img src={item.picture} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn" onClick={() => addItem(item.id)}>Add to cart</div>
            </div></a>
        </div>
    })
    return (
        <div className="main_content">
            {/* <h3>Mobiles</h3> */}
            {listItems}
            {addItem}
        </div>
    )
}
export default MainContent;
