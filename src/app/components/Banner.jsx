import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full md:w-1/2 px-8 md:px-16 py-16 flex flex-col justify-center gap-6">
        <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide">
          🔥 Trusted by 50,000+ shoppers
        </span>

        <h1 className="text-5xl md:text-6xl leading-tight font-black text-[#1E1B4B]">
          Shop Smarter,
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#7C3AED]">
            Live Better
          </span>
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-600 max-w-md">
          Browse trending products, compare prices, and discover the best deals
          all in one place.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-2">
          <button className="font-semibold text-white px-10 py-3.5 rounded-full bg-[#4338CA] shadow-lg shadow-indigo-300 hover:bg-[#3730A3] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ">
            Explore Products
          </button>
          <button className="font-semibold text-[#4338CA] px-8 py-3.5 rounded-full border-2 border-[#4338CA] hover:bg-indigo-50 transition-colors duration-200">
            Learn More
          </button>
        </div>

        <div className="flex items-center gap-8 mt-6 text-sm text-gray-500">
          <div>
            <p className="text-2xl font-bold text-[#1E1B4B]">10K+</p>
            <p>Products</p>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div>
            <p className="text-2xl font-bold text-[#1E1B4B]">4.9★</p>
            <p>Avg Rating</p>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div>
            <p className="text-2xl font-bold text-[#1E1B4B]">24/7</p>
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
        <Image
          src={"/hero bg.jpg"}
          fill
          className="object-cover md:rounded-l-[3rem]"
          alt="hero bg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:rounded-l-[3rem]" />
      </div>
    </div>
  );
};

export default Banner;
