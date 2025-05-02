"use client";
import React, { useState } from "react";
import Counter from "../general/Counter";
import Buttons from "../general/Buttons";
import { useCart } from "@/hooks/useCart";

export interface ProductType {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export const DetailClient = ({ product }: { product: ProductType }) => {
  const { addToBasket, cartPrdcts } = useCart(); 

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  const cardProduct = {
    id: product.id,
    title: product.title,
    quantity: quantity,
    price: product.price,
    image: product.image,
    description: product.description,
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        key={product.id}
        className="flex gap-24 items-center justify-center h-full"
      >
        <div>
          <img width={250} src={product.image} alt="" />
        </div>
        <div>
          <div>
            <p>{product.title}</p>
            <p className="text-xl font-bold">{product.price} ₺</p>
            <div>
              <p className="w-96">{product.description}</p>
            </div>
          </div>
          <div className="flex flex-start py-5">
            <Counter onChange={handleQuantityChange} value={quantity} />
          </div>
          <div>
            <Buttons
              onclick={() => {
                addToBasket(cardProduct);
              }}
              text={"Sepete Ekle"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
