import { Card } from "@heroui/react";
import React from "react";
import ComponentCard from "./ui/ComponentCard";

const FeaturedProducts = async () => {
    let products=[]
  try{
  const data = await fetch("https://dummyjson.com/products");
  const results = await data.json();
  products=results.products;
  }catch(error){
    console.log(error)
  }
  
console.log(products,"from featured pages")
  const allProducts = products.slice(0,6);
  console.log(allProducts)

  return (
    <div className="">
      <div
        className="mt-20  bg-[#EEF2FF] py-40 md:py-20  shadow-2xl  "
        style={{ clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <h1 className="text-5xl md:text-6xl leading-tight text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#7C3AED]">
          Our Featured Collection
        </h1>
        <h1 className="text-[#1E1B4B] font-medium text-2xl text-center">
          Discover trending products carefully selected to <br /> provide the
          best shopping experience.
        </h1>
      </div>
      <div className="bg-[#EEF2FF] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-5 mx-auto px-10 py-5">
        {
            allProducts.map(pd=> <ComponentCard key={pd.id} product={pd}/>)
        }

      </div>
    </div>
  );
};

export default FeaturedProducts;
