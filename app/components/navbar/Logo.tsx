import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo.svg" width={40} height={40} alt="logo" />
    </div>
  );
};
export default Logo;
