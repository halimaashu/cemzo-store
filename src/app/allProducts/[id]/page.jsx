import Image from "next/image";
import { FaStar, FaShippingFast, FaShieldAlt, FaUndo } from "react-icons/fa";

const Page = async ({ params }) => {
  const { id } = await params;
  let product = null;

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });
    product = await res.json();
  } catch (error) {
    console.log(error);
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const isLowStock = product.stock < 10;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src={product.thumbnail}
            fill
            alt={product.title}
            className="object-cover rounded-2xl"
          />

          {product.discountPercentage > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {Math.round(product.discountPercentage)}% OFF
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            {product.brand}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1E1B4B]">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 text-sm">
            <FaStar className="text-yellow-400" />
            <span className="font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-gray-400">
              ({product.reviews?.length ?? 0} reviews)
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-lg text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          <span
            className={`w-fit text-xs font-medium px-3 py-1 rounded-full mt-1 ${
              isLowStock
                ? "bg-orange-100 text-orange-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {isLowStock
              ? `Only ${product.stock} left in stock`
              : product.availabilityStatus}
          </span>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="font-semibold text-white px-10 py-3.5 rounded-full bg-[#4338CA] hover:bg-[#3730A3] shadow-lg shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200">
              Buy Now
            </button>
            <button className="font-semibold text-[#4338CA] px-8 py-3.5 rounded-full border-2 border-[#4338CA] hover:bg-indigo-50 transition-colors duration-200">
              Add to Cart
            </button>
          </div>

          {/* Meta info */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <FaShippingFast /> {product.shippingInformation}
            </p>
            <p className="flex items-center gap-2">
              <FaShieldAlt /> {product.warrantyInformation}
            </p>
            <p className="flex items-center gap-2">
              <FaUndo /> {product.returnPolicy}
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-3">{review.comment}</p>
                <p className="text-xs font-semibold text-gray-800">
                  {review.reviewerName}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;