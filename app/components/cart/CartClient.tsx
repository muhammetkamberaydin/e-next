"use client";

import { useCart } from "@/hooks/useCart";
import Counter from "../general/Counter";
import Buttons from "../general/Buttons";
import Link from "next/link";
import React, { useState } from "react";

const CartClient = () => {
  debugger;
  const { cartPrdcts, removeToBasket, updateQuantity } = useCart();
  const [productCartQty, setProductCartQty] = useState(1);

  const handleRemoveFromBasket = (product) => {
    removeToBasket(product);
  };

  const handleQuantityChange = (productId: number, newValue: number) => {
    updateQuantity(productId, newValue);
  };

  return (
    <div className="flex flex-col items-center">
      {cartPrdcts.length > 0 ? (
        cartPrdcts.map((product) => (
          <>
            <div className="w-3/6 p-8 flex justify-between items-center border-b-2 border-gray-200">
              <Link href={`/product/${product.id}`} className="w-1/5">
                <div>
                  <img width={100} src={product.image} alt="" />
                </div>
              </Link>
              <div className="w-2/5"> {product.title}</div>
              <div className="w-1/5">
                <Counter
                  onChange={(value) => {
                    handleQuantityChange(product.id, value);
                  }}
                  value={product.quantity}
                />
              </div>
              <div className="w-1/5 text-center"> {product.price} ₺ </div>
              <div className="w-1/5">
                <Buttons
                  onclick={() => {
                    handleRemoveFromBasket(product);
                  }}
                  text={"Sil"}
                />
              </div>
            </div>
          </>
        ))
      ) : (
        <p> ürün yok</p>
      )}
    </div>
  );
};

export default CartClient;
