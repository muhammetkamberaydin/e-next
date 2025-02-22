import React from 'react';
import Category from "./components/home/Category";
import Banner from "./components/home/Banner";
import Products from "./components/home/Products"; // Ensure this path is correct or update it to the correct path

export default function Home() {
  return (
    <>
      <Category />
      <Banner />
      <Products />
    </>
  );
}
