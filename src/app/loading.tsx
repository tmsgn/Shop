import React from "react";

const Loading = () => {
    return (
        <div className="w-full p-4 md:p-8 animate-pulse">
            <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg px-6 py-12">
                <div className="max-w-lg space-y-5 text-center md:text-left">
                    <div className="h-12 md:h-16 bg-blue-200 rounded w-3/4 mx-auto md:mx-0" />
                    <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto md:mx-0" />
                    <div className="h-10 bg-blue-100 rounded w-1/2 mx-auto md:mx-0" />
                </div>
                <div className="mt-10 md:mt-0">
                    <div className="bg-gray-200 rounded-xl w-[300px] h-[400px]" />
                </div>
            </section>

            <section className="mt-16">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg shadow p-4 flex flex-col space-y-3"
                        >
                            <div className="bg-gray-200 h-32 rounded" />
                            <div className="h-6 bg-gray-200 rounded w-3/4" />
                            <div className="h-4 bg-gray-100 rounded w-1/2" />
                            <div className="h-5 bg-blue-100 rounded w-1/3" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Loading;