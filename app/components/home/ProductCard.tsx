import React from "react";
import TextClip from "@/utils/TextClip";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

interface productProps {
  products: {
    image: string;
    title: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const ProductCard: React.FC<productProps> = ({ products }) => {
  return (
    <div className="border-2 p-5 border-gray-200 cursor-pointer">
      <div className="flex flex-center justify-center min-h-44 max-h-44 h-44">
        <img
          width={150}
          className="object-fit min-h-44 max-h-44 h-44"
          src={products.image}
          alt={products.title}
        />
      </div>
      <div className="text-center">
        <p> {TextClip(products.title)} </p>
        <p>{products.price} ₺</p>
        <Rating name="read-only" value={products.rating.rate} readOnly />
      </div>
      <div className="text-center mt-3">
        <Button variant="outlined">SEPETE EKLE</Button>
      </div>
    </div>
  );
};
export default ProductCard;
