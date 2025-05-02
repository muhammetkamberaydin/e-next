"use client";
import { useCart } from "@/hooks/useCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useEffect } from "react";

const CardCount = () => {
  const { productCartQty } = useCart();

  return (
    <div className="hidden md:flex ">
      <Link href="/cart">
        <Badge badgeContent={productCartQty} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};

export default CardCount;
