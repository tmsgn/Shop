"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/utils/data";
import { useCart } from "@/app/components/cartContext";

const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <div className="fixed top-6 right-6 z-50">
    <div className="bg-green-600 text-white px-4 py-2 rounded shadow flex items-center space-x-3 max-w-sm">
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white font-bold text-xl focus:outline-none hover:opacity-75"
      >
        &times;
      </button>
    </div>
  </div>
);

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const addToCart = useCart();

  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Product not found.</div>
      </div>
    );
  }

  const mainImage = product.images[0]?.image || "";
  const [mainImageUrl, setMainImageUrl] = useState(mainImage);
  const thumbnailUrls = product.images.map((img) => img.image);

  const [tab, setTab] = useState('details');
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  const handleAddToCart = () => {
    addToCart.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0]?.image || "",
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans">
      {showToast && (
        <Toast message="Added to cart!" onClose={() => setShowToast(false)} />
      )}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-sm">
          {/* Images */}
          <div className="md:w-1/2 flex flex-col justify-between items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-4 mb-6">
              <Image
                src={mainImageUrl}
                alt={product.name}
                width={300}
                height={500}
                className="rounded-lg object-contain w-full h-auto"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {thumbnailUrls.map((url, index) => (
                <div
                  onClick={() => setMainImageUrl(url)}
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 bg-[#f5f5f5] rounded-lg flex items-center justify-center p-1 cursor-pointer border-2 ${
                    mainImageUrl === url
                      ? "border-blue-500"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    width={55}
                    height={70}
                    className="rounded object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-700 font-semibold text-sm">
                {product.brand}
              </span>
            </div>
            <h1 className="text-2xl font-semibold text-[#222] mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mb-4">{product.id}</p>

            {/* Rating */}
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
                ({product.reviews?.length ?? 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-[#222] mb-2">
              ${product.price.toFixed(2)}
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Description</h2>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>

            {/* Color selection */}
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Color:{" "}
              </div>
              <div className="flex space-x-2">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: img.colorCode }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-200 text-sm">
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

            {/* Delivery Info */}
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

        {/* Details, Reviews, Discussion Tabs */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => { setTab('details') }}
              className={`px-4 cursor-pointer py-2 text-sm font-semibold ${tab === 'details' ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Details
            </button>
            <button
              onClick={() => setTab('reviews')}
              className={`px-4 py-2 cursor-pointer text-sm font-semibold ${tab === 'reviews' ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Reviews
            </button>
          </div>

          <div className="py-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Rating Summary */}
              {tab === 'reviews' && (
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold mr-2">
                      {product.rating?.toFixed(1)}
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
                    ({product.reviews?.length ?? 0} reviews)
                  </div>
                </div>
              )}

              {/* Individual Reviews */}
              {tab === 'reviews' ? (
                <div className="lg:w-2/3">
                  <div className="mb-4 text-sm text-gray-700 flex items-center justify-between">
                    <span>Reviews ({product.reviews?.length ?? 0})</span>
                    <div className="flex items-center space-x-2">
                      <label htmlFor="sort" className="sr-only">
                        Sort by:
                      </label>
                    </div>
                  </div>

                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                      <div key={index} className="border-t border-gray-200 py-4">
                        <div className="flex items-start mb-2">
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-semibold mr-3">
                            {review.user?.name?.charAt(0) || "U"}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 text-sm">
                              {review.user?.name || "User"}
                            </div>
                            <div className="text-xs text-gray-500">
                              {review.createdDate
                                ? new Date(review.createdDate).toLocaleDateString()
                                : ""}
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
                        <p className="text-gray-700 text-sm mb-3">
                          {review.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">No reviews yet.</div>
                  )}
                </div>
              ) : (
                <div className="lg:w-2/3">
                  <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                  <ul className="text-gray-700 text-sm space-y-2">
                    {product.specs &&
                      Object.entries(product.specs).map(([key, value]) => (
                        <li key={key} className="flex">
                          <span className="w-32 font-medium">{key}:</span>
                          <span>{value}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;