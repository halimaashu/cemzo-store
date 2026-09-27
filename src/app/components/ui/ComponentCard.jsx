import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const ComponentCard = ({ product }) => {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const isLowStock = product.stock < 10;

  return (
    <div>
      <Card className="p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <div className="relative w-full h-52">
          <Image
            src={product.thumbnail}
            fill
            alt={product.title}
            className="object-cover rounded-xl"
          />

          {product.discountPercentage > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {Math.round(product.discountPercentage)}% OFF
            </span>
          )}
        </div>

        <p className="text-xs text-gray-400 uppercase tracking-wide mt-3">
          {product.brand}
        </p>

        <h2 className="text-lg font-bold line-clamp-1">{product.title}</h2>

        <p className="text-gray-500 text-sm">{product.category}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-600">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm">
            ⭐ {product.rating.toFixed(1)} ({product.reviews?.length ?? 0})
          </span>
        </div>

        <div className="mt-2">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              isLowStock ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
            }`}
          >
            {isLowStock ? `Only ${product.stock} left` : product.availabilityStatus}
          </span>
        </div>
        <div className="flex justify-between mt-3 ">
            <Button className={"font-semibold text-white px-6 py-3 rounded-full bg-[#4338CA] shadow-lg shadow-indigo-300 hover:bg-[#3730A3] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"}>Buy Naw <FaArrowRight /></Button>
            <Button className={"font-semibold bg-white text-[#4338CA] px-8 py-3.5 rounded-full border-2 border-[#4338CA] hover:bg-indigo-50 transition-colors duration-200 "}><CiStar size={70} className="text-yellow-500 font-black" /> wish list</Button>
        </div>
      </Card>
    </div>
  );
};

export default ComponentCard;