"use client";

import { useCart } from "@/hooks/useCart";
import Counter from "../general/Counter";
import Buttons from "../general/Buttons";

const CartClient = () => {
  const { cartPrdcts } = useCart();
  console.log("sasasas", cartPrdcts);

  const deleteBasket = (id) => {
    alert(id);
  };

  return (
    <div className="flex flex-col items-center">
      {cartPrdcts ? (
        cartPrdcts.map((product) => (
          <div className="w-3/6 p-8 flex justify-between items-center border-b-2 border-gray-200">
            <div className="w-1/5">
              <img width={100} src={product.image} alt="" />
            </div>
            <div className="w-2/5"> {product.title}</div>

            <div className="w-1/5">
              <Counter value={product.quantity} />
            </div>
            <div className="w-1/5 text-center"> {product.price} ₺ </div>
            <div className="w-1/5">
              <Buttons
                onclick={() => {
                  deleteBasket(product.id);
                }}
                text={"Sil"}
              />
            </div>
          </div>
        ))
      ) : (
        <p> ürün yok</p>
      )}
    </div>
  );
};

export default CartClient;
