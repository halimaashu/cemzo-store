"use client";
import React, { useEffect, useState } from "react";
import ComponentCard from "../components/ui/ComponentCard";
import { h1 } from "framer-motion/client";
import { ImFilesEmpty } from "react-icons/im";
import { FaSearchengin } from "react-icons/fa";
const AllProductsPage = () => {
  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search,"frpom pabksdb s,j")
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://dummyjson.com/products");
        const results = await data.json();
        setProducts(results.products);
      } catch (error) {
        console.log(error);
      }

    };
    fetchProducts()

  },[]);

//   console.log(products, "from featured pages");
  const allProducts = products;
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);
//   console.log(allProducts, "from all products pages");
  return (
    <div>
      <div className="flex justify-center text-center items-center mt-10 mb-15">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl leading-tight font-black bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#7C3AED]">
            Explore All Products
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600 w-11/12 text-center p-4">
            Discover a wide range of products from beauty and fashion to
            electronics and furniture. Find the perfect product with our smart
            search experience.
          </p>
        </div>
      </div>
      {/* search box */}
      <div className="mt-3 mb-4 flex flex-col justify-center items-center">
        <form >
          <label htmlFor="search" className="text-2xl font-medium flex justify-center items-center gap-3">
           <FaSearchengin size={50} className="text-[#4338CA]"/>
            <input
              required
               onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[200px] md:w-full font-semibold text-[#4338CA] px-8 py-3.5 rounded-full border-2 border-[#4338CA] hover:bg-indigo-50 transition-colors duration-200"
              placeholder="Search..."
            />
          </label>
          
        </form>
      </div>

      <div className="bg-[#EEF2FF] ">
        {
            filteredProducts.length>0?(
             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-5 mx-auto px-10 py-5">{
                   filteredProducts.map((pd) => (
          <ComponentCard key={pd.id} product={pd} />
        
           ))
        }</div> ):(<div className="flex flex-col h-screen justify-center items-center gap-5">
            <h1 className="text-3xl font-bold text-center "> No products found</h1>
            <h1><ImFilesEmpty size={100} /></h1>

            </div>)
        }
      </div>
    </div>
  );
};

export default AllProductsPage;
