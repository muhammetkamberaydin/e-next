import { DetailClient } from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";
import React from "react";

type DetailProps = {
  params: {
    productid?: string;
  };
};

const Detail = ({ params }: DetailProps) => {
  const id = params.productid;
  const product = products.find((item) => item.id === Number(id));

  return (
    <>
      <DetailClient product={product} />
    </>
  );
};

export default Detail;
