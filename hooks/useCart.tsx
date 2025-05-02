"use client";
import { ProductType } from "@/app/components/detail/DetailClient";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: ProductType[];
  addToBasket: (product: ProductType) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getItem: any = localStorage.getItem("cart");
    const getItemParse: ProductType[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemParse);
  }, []);

  useEffect(() => {
    setProductCartQty(cartPrdcts?.length);
  }, [cartPrdcts]);

  const addToBasket = useCallback(
    (product: ProductType) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          const exsitingProduct = prev.find((x) => x.id == product.id);
          if (exsitingProduct) {
            updatedCart = prev.map((item) =>
              item.id == product.id
                ? { ...item, quantity: product.quantity + 1 }
                : item
            );
          } else {
            updatedCart = [...prev, product];
          }
        } else {
          updatedCart = [product];
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("useCart Contextte hata var!");
  }
  return context;
};
