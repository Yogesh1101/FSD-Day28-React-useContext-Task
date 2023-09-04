import { createContext, useContext } from "react";
import productsData from "./products.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={productsData}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
