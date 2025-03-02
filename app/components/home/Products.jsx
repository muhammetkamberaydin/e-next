import React from "react";
import { products } from "@/utils/Products";
import Heading from "../general/Heading";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div>
      <Heading text="ÜRÜNLER" />
      <div className="px-5 flex flex-wrap gap-8 justify-center flex-center">
        {products.map((products, item) => {
          return <ProductCard key={item} products={products} />;
        })}
      </div>
    </div>
  );
};
export default Products;
