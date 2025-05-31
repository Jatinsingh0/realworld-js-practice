'use client'

// Auto-focus on input when component rendered.
// import { useEffect, useRef } from 'react';

// export default function LoginForm() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus(); // Focus the input on rendered.
//   }, []);

//   return (
//     <div className="p-4">
//       <input ref={inputRef} className="border p-2 rounded" placeholder="Type your name"/>
//     </div>
//   );
// }



//How many times the component rendered when state changes?

// import { useRef, useEffect, useState } from "react"

// const renderTracker = () => {
//     const[count, setCount] = useState(1)
//     const countRef = useRef(1)

//     useEffect(()=>{
//         countRef.current += 1; // everyTime count state changes, useEffect runs and increase the countRef.current. 
//     })

//     return(
//         <>
//         <p>Count: {count}</p>
//         <p>this component has rendered {countRef.current} times.</p>
//         <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
//         </>
//     )
// }

// export default renderTracker;



// Scroll to the RefSection in a click.
 import { useRef } from "react"

 const scrollToView = () => {
    const sectionRef = useRef()
   const  scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
   }

    return (
        <div>
            <button onClick={scrollToSection}>GO To RefSection</button>
            <div style={{ height: "1000px" }} /> {/* Just some space */}
      <div ref={sectionRef} style={{ height: "200px", background: "grey" }}>
        hey! You scrolled to me. I'm refSection!
      </div>
        </div>
    )
 }

 export default scrollToView


// useMemo hook
// import { useMemo, useState } from "react";

// const expensiveLoading = () => {
//     const[count, setCount] =  useState(0)
//     const avoidingExpensivLoading = useMemo(()=> {
//        let result = 0;
//        for(let i = 0; i < 100000; i++){
//         result += count
//        }
//        return result;
//     }, [count])
//     return (
//         <div>
//           <p>expensive Calculation: {avoidingExpensivLoading}</p>
//           <button onClick={()=> setCount(count + 1)}>Increment count</button>
//         </div>
//     )
// }

// export default expensiveLoading


