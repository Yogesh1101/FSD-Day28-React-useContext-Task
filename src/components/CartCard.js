import React, { useState } from "react";

// This Component is used to display all cart items in responsive way
function CartCard({ data, handleQuantity }) {
  // It stores the sub total of the particular cart item by the quantity selected
  const [subTotal, setSubTotal] = useState(data.price);
  return (
    <div className="col mb-5 w-100">
      <div className="card cart-card h-100 bg-light">
        <div className="card-header cart-card-header">
          <img className="cart-image" src={data.thumbnail} alt={data.title} />
          <div className="cart-title-description">
            <p className="cart-name">{data.title}</p>
            <p className="cart-description">{data.description}</p>
          </div>
          <div className="cart-header-last">
            <div className="cart-price-quantity">
              <select
                className="form-control cart-select"
                onChange={(e) => {
                  // This handleQuantity function is sent to App Component
                  // To update the price according to quantity
                  handleQuantity(data.id, parseInt(e.target.value));
                  // This is used to update the price whent the quantity is changed
                  setSubTotal(data.price * e.target.value);
                }}
              >
                <option className="select-option" value="1">
                  1
                </option>
                <option className="select-option" value="2">
                  2
                </option>
                <option className="select-option" value="3">
                  3
                </option>
              </select>
              <p className="cart-price">&#36; {data.price}</p>
            </div>
            <div className="cart-remove">
              <p className="remove">REMOVE</p>
            </div>
            <div className="cart-perITem-subTotal">
              <p className="cartSubText">SUB TOTAL :- &nbsp;</p>
              <p className="cart-SubTotal">$ {subTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
