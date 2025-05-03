"use client";
import { ProductType } from "@/app/components/detail/DetailClient";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: ProductType[];
  addToBasket: (product: ProductType) => void;
  removeToBasket: (product: ProductType) => void;
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
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            updatedCart = [...prev, product];
          }
        } else {
          updatedCart = [product];
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
        toast.success("Sepete eklendi");
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const removeToBasket = useCallback(
    (product: ProductType) => {
      setCartPrdcts((item) => {
        const newItems = item.filter((x) => x.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(newItems));
        toast.error("Sepette silindi");
        return newItems;
      });
    },
    [cartPrdcts]
  );

  const value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
    removeToBasket,
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
