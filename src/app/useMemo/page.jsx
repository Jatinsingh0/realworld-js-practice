'use client'
import { useMemo, useState } from "react";

const ExpensiveLoading = () => {
    const[count, setCount] =  useState(0)
    const[otherCount, setOtherCount] =  useState(0)

    const avoidingExpensivLoading = useMemo(()=>{
     let result = 0;
     for(let i =0; i < 100000; i++){
       result += count
     }
     return result;
    }, [count]);

    return (
        <div>
            <p>count: {count}</p>
            <p>otherCount: {otherCount}</p>
          <p>Expensive Calculation only runs when count changes: {avoidingExpensivLoading}</p>
          <button onClick={()=> setCount(count + 1)}>Increment count</button>
          <p></p>
          <button onClick={()=> setOtherCount(otherCount + 1)}>Increment otherCount</button>
        </div>
    )
}

export default ExpensiveLoading