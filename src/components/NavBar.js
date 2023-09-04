import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ cartCount }) {
  return (
    <nav className="container">
      <p className="title">GUVI Shopping Stop</p>
      <ul>
        <li>
          {/* It navigates to / when the home is clicked */}
          <NavLink
            to="/"
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
          >
            <p className="home">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            {/* It navigates to /cart when the cart button is clicked */}
            <button className="btn btn-outline-light">
              Cart
              <span className="badge bg-dark text-white ms-2 rounded-pill">
                {/* It displays the total length of the cart items */}
                {cartCount.length}
              </span>
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
