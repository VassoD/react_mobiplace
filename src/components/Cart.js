import React from 'react'
import { useCart } from "react-use-cart";

const Cart = () => {
    const { 
        isEmpty, 
        totalUniqueItems, 
        items, 
        totalItems, 
        // cartTotal,
        // updateItemQuantity, 
        // removeItem,
        // emptyCart,
    } = useCart();
    if (isEmpty) return <h1 classname="text-center">Your cart is empty</h1>   
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                      <tbody>
                        {items.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.picture} /> 
                                    </td>
                                    <td>{item.product_name}</td>
                                    <td>{item.price}</td>
                                    {/* <td>Quantity ({item.quantity})</td> */}
                                    <td>
                                        <button className="btn btn-info ms-2">-</button>
                                        <button className="btn btn-info ms-2">+</button>
                                        <button className="btn btn-danger ms-2">+</button>
                                    </td>
                                </tr>
                                )
                           })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};


export default Cart