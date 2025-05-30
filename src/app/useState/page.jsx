'use client';

//useState is a hook that lets you add or update state variables to functional components.
import { useState } from 'react';

 const Counter = () => {
 const [count, setCount] = useState(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold">Count: {count}</h2>
      <button 
        onClick={()=> setCount(count + 1)} 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Increment
      </button>
      <button 
        onClick={()=> {
            if(count === 0){
                setCount(count)
            }else{
                setCount(count - 1)
            }
        }} 
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        decrement
      </button>
    </div>
  );
}

export default Counter