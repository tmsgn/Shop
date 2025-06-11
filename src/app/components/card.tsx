"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = () => {
    const router = useRouter();
  return (
    <div
    onClick={() => router.push(`/product/Wireless-Bluetooth-5.0-Headphone`)}
    className="bg-white cursor-pointer border border-gray-200 rounded-xl p-4 flex flex-col items-center space-y-3 hover:shadow-xl transition group relative">
    <div className="relative">
      <Image
        src="/headphone.png"
        alt="Product"
        width={180}
        height={180}
        className="object-contain group-hover:scale-110 group-hover:rotate-3  transition-transform duration-300 ease-out rounded"
      />
    </div>

      <div className="w-full text-center">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          Wireless Bluetooth 5.0 Headphone
        </h3>

        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="text-md font-bold text-black">ETB194.24</span>
          <span className="text-sm line-through text-gray-400">ETB389.98</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-1">
          <span>★ 3.5</span>
          <span>|</span>
          <span>900+ sold</span>
        </div>
      </div>

      {/* Side-by-side buttons */}
      <div className="flex justify-between items-center w-full gap-2 mt-2">
        <button className="flex-1 cursor-pointer bg-blue-600 text-white font-medium rounded-full py-2 text-sm hover:bg-blue-700 transition">
          Add to Cart
        </button>

        <button className="flex-1 border border-gray-400 text-sm text-blue-600 font-medium rounded-full py-2 cursor-pointer hover:bg-gray-200 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Card;
