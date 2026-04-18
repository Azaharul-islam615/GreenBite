import React from "react";

const FoodSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

            {/* Image skeleton */}
            <div className="h-48 w-full bg-gray-400"></div>

            {/* Content */}
            <div className="p-4 space-y-3">

                {/* title */}
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>

                {/* category */}
                <div className="h-3 bg-gray-400 rounded w-1/2"></div>

                {/* price + button */}
                <div className="flex items-center justify-between pt-2">
                    <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-400 rounded w-20"></div>
                </div>

            </div>
        </div>
    );
};

export default FoodSkeleton;