import React from "react";
import CartCard from "../components/CartCard";

// This CartPage component displays all the cart items where the user Added to the cart
function CartPage({ cartItems, handleQuantity, totalQuantity, totalPrice }) {
  return (
    <section className="py-5">
      <div className="container px-3 px-lg-3 mt-0">
        <div className="col gx-3 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-start">
          {/* Here CartCard component is called to display cart items one-by-one */}
          {cartItems.map((item, index) => (
            <CartCard key={index} data={item} handleQuantity={handleQuantity} />
          ))}
        </div>
        <div className="card cart-card-body card-header">
          <div className="cart-total-quantity">
            <p className="quantity-text">Total Quantity : </p>
            {/* The Total Quantity of the entire cart is displayed from App Component */}
            <p className="total-quantity">{totalQuantity}</p>
          </div>
          <div className="cart-shipping">
            <p className="shipping-text">SHIPPING : </p>
            <p className="free-text">FREE</p>
          </div>
          <div className="cart-total-price">
            <p className="total-text">Total : </p>
            {/* The Total Price of the entire cart is displayed from App Component */}
            <p className="total-price">&#36; {totalPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
