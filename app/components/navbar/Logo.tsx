"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer "
      onClick={() => {
        router.push("/");
      }}
    >
      <Image src="/logo.svg" width={40} height={40} alt="logo" />
    </div>
  );
};
export default Logo;
