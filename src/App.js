import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { useProducts } from "./contexts/ProcuctContext";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { useState } from "react";

// This is a App Component
function App() {
  // useProducts is imported from the ProductContext file where we have all the product details
  const products = useProducts();
  const [cartItems, setCartItems] = useState([]);

  // It updates the cart items list whenever the add to cart button is clicked
  const addToCart = (event, data) => {
    if (event.target.textContent === "Add to Cart") {
      let cartCopy = [...cartItems];
      cartCopy.push({ ...data, quantity: 1 });
      setCartItems(cartCopy);
      event.target.textContent = "Remove from Cart";
    } else {
      setCartItems(cartItems.filter((item) => item.id !== data.id));
      event.target.textContent = "Add to Cart";
    }
  };

  // It calculates the quantity price according the value is selected from dropdown
  const handleQuantity = (productID, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productID ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // It count the total number of quantity
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // It calculates the total price of the entire cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      {/* Navigation Bar Component */}
      <NavBar cartCount={cartItems} />
      {/* Routes is assigned for the components with values passed */}
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} addToCart={addToCart} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              handleQuantity={handleQuantity}
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
