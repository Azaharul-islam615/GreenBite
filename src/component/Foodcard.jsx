import Link from 'next/link';
import React from 'react';

const Foodcard = ({food}) => {
    return (
        <div key={food.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={food.foodImg}
                    alt={food.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                    {food.title}
                </h2>

                <p className="text-sm text-gray-500">
                    Category: {food.category}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-green-600">
                        ৳ {food.price}
                    </span>

                    <div className='flex justify-between gap-1'>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm transition">
                            Order Now
                        </button>
                        <Link href={`/foods/${food.id}`} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm transition">
                           View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;