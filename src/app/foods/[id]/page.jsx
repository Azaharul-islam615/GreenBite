import React from "react";
import { FaPlaceOfWorship, FaPlay, FaShoppingCart } from "react-icons/fa";

const getSingleFood = async (id) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    return data.details;
};

const Page = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return <h2 className="text-center mt-10 text-xl">Food not found</h2>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Image Section */}
                <div className="relative">
                    <img
                        src={food.foodImg}
                        alt={food.title}
                        className="w-full h-[350px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                        {food.category}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-2">{food.title}</h1>

                    {/* Area */}
                    <p className="text-gray-500 mb-4">
                        🌍 {food.area} Cuisine
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                        <span className="text-2xl font-semibold text-green-600">
                            ৳ {food.price}
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href={food.video}
                            target="_blank"
                            className="bg-green-500 flex items-center gap-1 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                        >
                            <FaPlay  /> Watch Recipe
                        </a>

                        <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded">
                            <FaShoppingCart size={20} />
                            Order Now
                        </button>
                    </div>

                    {/* Extra Info */}
                    <div className="mt-8 border-t pt-6">
                        <h2 className="text-xl font-semibold mb-2">About this food</h2>
                        <p className="text-gray-600">
                            This delicious {food.title} is a popular {food.category} dish from{" "}
                            {food.area}. Perfect for food lovers who enjoy rich flavors and
                            healthy ingredients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;