"use client";
import React, { useState } from "react";
import Counter from "../general/Counter";
import Buttons from "../general/Buttons";

interface ProductType {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export const DetailClient = ({ product }: { product: ProductType }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  console.log("asdasddasasd", quantity);
  console.log("asdasd", product);

  const addCard = () => {
    const cardProduct = {
      id: product.id,
      title: product.title,
      quanity: quantity,
    };
    console.log("cardProduct:", cardProduct);
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
            <Buttons onclick={addCard} text={"Sepete Ekle"} />
          </div>
        </div>
      </div>
    </div>
  );
};
