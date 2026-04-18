import FoodSkeleton from '@/skeletone/Foodskeleton';
import React from 'react';

const Loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 '>
            {[...Array(10)].map((_ ,index)=><FoodSkeleton key={index}></FoodSkeleton>)}
        </div>
    );
};

export default Loading;