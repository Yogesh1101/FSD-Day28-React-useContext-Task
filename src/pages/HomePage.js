import React from "react";
import ProductCard from "../components/ProductCard";

// This is HomePage Component used to display the product in the card
// with the help of ProductCard component
function HomePage({ products, addToCart }) {
  return (
    <section className="py-5">
      <div className="container px-3 px-lg-3 mt-0">
        <div className="row gx-3 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-start">
          {products.map((detail) => (
            <ProductCard key={detail.id} data={detail} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
