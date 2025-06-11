import React from "react";
import Image from "next/image";
import Card from "./components/card";

const Home = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg px-6 py-12">
        <div className="max-w-lg space-y-5 text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-6xl text-blue-800 drop-shadow-sm">
            Summer Sale!
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Get exclusive discounts on selected items.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            GET 50% OFF
          </h2>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="/headphone.png"
            alt="Summer Sale"
            width={300}
            height={400}
            className=""
            priority
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
