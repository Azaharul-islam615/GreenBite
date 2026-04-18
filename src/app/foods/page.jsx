import Foodcard from '@/component/Foodcard';
import React from 'react';
import { resolve } from 'styled-jsx/css';
const geFoods=async()=>{
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random")
    const data=await res.json()
    await new Promise((resolve)=>setTimeout(resolve,2000))
    return data.foods || []
    
}


const foodpage =async () => {
    const foods = await geFoods();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {foods.map((food) => (
               <Foodcard key={food.id} food={food}></Foodcard>
            ))}
        </div>
    );
};

export default foodpage;