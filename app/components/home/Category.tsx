"use client";
import React from 'react';
const Category = () => {
  const categoryList = [
    { name: "Beyaz Eşya" },
    { name: "Mobilya" },
    { name: "Tekstil" },
    { name: "Elektronik Ev Eşyaları" },
    { name: "Hizmet" }, 

  ];
  return (
    <div className="flex gap-10 justify-center py-6">
      {categoryList.map((item, i) => {
        return <div key={i}> {item.name}</div>;
      })}
    </div>
  );
};
export default Category;
