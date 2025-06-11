"use client";

import React, { useState } from "react";
import Image from "next/image";

const productData = {
  brand: "TechBrand",
  name: "ProAudio X Wireless Headphones",
  rating: 4.8,
  reviewsCount: 42,
  price: 199.0,
  color: "Black",
  description:
    "Experience immersive sound with active noise cancellation. Comfortable over-ear design for long listening sessions.",
  reviews: [
    {
      name: "John",
      date: "Yesterday",
      rating: 5,
      text: "Amazing sound quality and very comfortable!",
      likes: 42,
      dislikes: 0,
    },
    {
      name: "Sarah",
      date: "2 days ago",
      rating: 4,
      text: "Battery life is excellent. Noise cancelling works well.",
      likes: 35,
      dislikes: 2,
    },
  ],
  reviewSummary: {
    5: 28,
    4: 9,
    3: 4,
    2: 1,
    1: 1,
  },
};

const mainImageUrl = "/headphone.png";
const thumbnailUrls = [
  "/headphone.png",
  "/headphone.png",
  "/headphone.png",
  "/headphone.png",
];

const ProductPage = () => {
  const product = productData;
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans">
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-sm">
     
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#f5f5f5] rounded-xl p-4 mb-6">
              <Image
                src={mainImageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {thumbnailUrls.map((url, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 bg-[#f5f5f5] rounded-lg flex items-center justify-center p-1 cursor-pointer border-2 border-transparent hover:border-gray-300"
                >
                  <Image
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    width={70}
                    height={70}
                    className="rounded object-contain"
                  />
                </div>
              ))}
              <div className="flex-shrink-0 w-20 h-20 bg-[#f5f5f5] rounded-lg flex items-center justify-center text-gray-600 text-sm cursor-pointer hover:bg-gray-200">
                +4 more
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-700 font-semibold text-sm">
                {product.brand}
              </span>
            </div>
            <h1 className="text-2xl font-semibold text-[#222] mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mb-4">PBAX-HW-001</p>

          
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(product.rating)
                        ? "fill-current"
                        : "fill-gray-300  stroke-gray-400"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviewsCount} reviews)
              </span>
            </div>

         
            <div className="text-3xl font-bold text-[#222] mb-2">
              ${product.price.toFixed(2)}
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Description</h2>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>

        
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Color: <span className="font-normal">{product.color}</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white border border-gray-300"></div>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-transparent flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-black border border-gray-300"></div>
                </div>
              </div>
            </div>

          
            <div className="flex items-center space-x-4 mb-6">
              <button className="flex-1 bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-200 text-sm">
                Add to cart
              </button>
              <div className="flex items-center border border-gray-300 rounded-full px-2">
                <button
                  className="px-2 py-1 text-lg font-bold text-gray-700 hover:text-black focus:outline-none"
                  aria-label="Decrease quantity"
                  onClick={handleDecrease}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="px-3 select-none">{quantity}</span>
                <button
                  className="px-2 py-1 text-lg font-bold text-gray-700 hover:text-black focus:outline-none"
                  aria-label="Increase quantity"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <button className="border border-gray-300 p-3 rounded-full hover:bg-gray-100 transition duration-200">
                <svg
                  className="w-5 h-5 text-[#555]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

           
            <div className="text-sm text-gray-600 mb-6 flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 003 12c0 2.83 1.468 5.41 3.819 7.001z"
                />
              </svg>
              <span>Free delivery on orders over $300</span>
            </div>
          </div>
        </div>

     
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex border-b border-gray-200">
            <button className="px-4 py-2 text-sm font-semibold border-b-2 border-black text-black">
              Details
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-black">
              Reviews
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-black">
              Discussion
            </button>
          </div>

          <div className="py-6">
            <div className="flex flex-col lg:flex-row gap-8">

              <div className="lg:w-1/3">
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold mr-2">
                    {product.rating.toFixed(1)}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.round(product.rating)
                            ? "fill-current"
                            : "fill-gray-300  stroke-gray-400"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  ({product.reviewsCount} reviews)
                </div>
           
                {Object.entries(product.reviewSummary)
                  .sort(([a], [b]) => parseInt(b) - parseInt(a))
                  .map(([stars, count]) => (
                    <div key={stars} className="flex items-center text-sm mb-1">
                      <span className="w-4 text-gray-700">{stars}</span>
                      <div className="w-3/4 bg-gray-200 rounded-full h-1.5 ml-2">
                        <div
                          className="bg-yellow-400 h-1.5 rounded-full"
                          style={{
                            width: `${(count / product.reviewsCount) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-gray-600">{count}</span>
                    </div>
                  ))}
              </div>

            
              <div className="lg:w-2/3">
                <div className="mb-4 text-sm text-gray-700 flex items-center justify-between">
                  <span>Reviews ({product.reviews.length})</span>
                  <div className="flex items-center space-x-2">
                    <label htmlFor="sort" className="sr-only">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      className="border rounded-md px-2 py-1 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="highest">Highest rating</option>
                      <option value="lowest">Lowest rating</option>
                    </select>
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>

                {product.reviews.map((review, index) => (
                  <div key={index} className="border-t border-gray-200 py-4">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-semibold mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-current"
                              : "fill-gray-300 stroke-current "
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{review.text}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <button className="flex items-center hover:text-gray-700">
                        Reply
                      </button>
                      <span className="flex items-center space-x-1">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                        </svg>
                        <span>{review.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <svg
                          className="w-3 h-3 fill-current transform rotate-180"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                        </svg>
                        <span>{review.dislikes}</span>
                      </span>
                    </div>
                    
                    {index === 1 && (
                      <div className="ml-8 mt-3 pl-4 border-l border-gray-200">
                        <div className="flex items-start mb-2">
                          <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-semibold mr-3">
                            A
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 text-sm">
                              Andrew G.
                            </div>
                            <div className="text-xs text-gray-500">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Is the noise cancelling effective in a busy cafe?
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
