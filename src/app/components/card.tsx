"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./cartContext";

interface CardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  src: string;
  rating: number;
}

const Card = (props: CardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 inline ${
            i <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="..." />
        </svg>
      );
    }
    return stars;
  };

  const addToCart = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
      image: props.src,
    })
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="w-56 h-90 justify-between cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 relative group">
      <Link
        href={`/product/${props.id}`}
        className="w-full flex flex-col items-center"
        tabIndex={-1}
      >
        <div className="w-full flex items-center justify-center mb-3">
          <Image
            src={props.src}
            alt={props.name}
            width={120}
            height={120}
            className="object-cover transition-transform duration-300 group-hover:rotate-5"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <h1 className="font-semibold text-lg truncate w-full">
            {props.name}
          </h1>
          <p className="text-gray-500 text-xs mb-1">
            {props.brand} • {props.category}
          </p>
          <div className="flex items-center mb-1">
            {renderStars(props.rating)}
            <span className="ml-2 text-xs text-gray-500">{props.rating}</span>
          </div>
          <p className="text-gray-700 text-sm line-clamp-2 mb-2">
            {props.description}
          </p>
          <div className="flex items-center justify-between w-full mt-auto">
            <span className="font-bold text-green-600 text-base">
              ${props.price.toFixed(2)}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                props.inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {props.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex mt-1 z-20 justify-center gap-2">
        <button
          className="bg-blue-600 cursor-pointer text-white text-xs px-3 py-1 rounded shadow hover:bg-blue-700 transition-colors"
          disabled={!props.inStock}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-yellow-500 cursor-pointer text-white text-xs px-3 py-1 rounded shadow hover:bg-yellow-600 transition-colors"
          disabled={!props.inStock}
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
