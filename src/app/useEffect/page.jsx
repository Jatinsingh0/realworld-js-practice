'use client';

// the Primary purpose of useEffet hook is to perform side effect after functional component rendered.
import { useEffect, useState } from 'react';

export default function ProductList() {
const[products, setProducts] = useState([]);

useEffect(()=>{
    const fetching = async()=>{
        //Error handling
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
             throw new Error("Error:", error)
        }
    }
    fetching();
}, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🛒Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
            <li key={product.id} className="border p-4 rounded">{product.title}: {product.price}</li>
        ))}
      </ul>
    </div>
  );
}
