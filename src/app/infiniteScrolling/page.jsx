'use client';
import { useEffect, useRef, useState } from 'react';

// generatePosts is function for Demo posts because we are not using Backend API. testing infinite scrolling.
const generatePosts = (start, count) => {
  return Array.from({ length: count }, (_, i) => `Post #${start + i + 1}`);
};

const infiniteScrolling = () => {
  const [posts, setPosts] = useState(generatePosts(0, 10));
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver(built-in browser API) observe that DOM element are inside the viewport or not.
    const observer = new IntersectionObserver(
      entries => {    // entries is an array of all observed elements. This is a callback function that automatically runs when observed element(loaderRef) is inside the viewport(Means user scrollled to the bottom)
        if (entries[0].isIntersecting) {  // Means that observed element inside the viewport, entries[0] is that loader <div>, because we are only observing that one loader div in the bottom.
          const newPosts = generatePosts(page * 10, 10); //generating 10 new posts everytime.
          setPosts(prev => [...prev, ...newPosts]); // Append new posts with older posts using spred operator.
          setPage(prev => prev + 1); // increment the pages.
        }
      },
      { threshold: 1.0 } // this is a config object of IntersectionObserver. Means callback function only runs, when loader div 100% visible in viewport.
    );

    const currentLoader = loaderRef.current; // getting actual DOM element to observe.
    if (currentLoader) observer.observe(currentLoader); // observer.observe() Tells observer what to watch. now we Observing when loader div visible on screen.

    return () => {
      if (currentLoader) observer.unobserve(currentLoader); // when dependency changes stop observing old loader element.
    };
  }, [page]);

  return (
    <div className="p-8 max-w-xl mx-auto">
  <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
    Infinite Scroll Feed
  </h1>

  {/* Explanation Section */}
  <div className="mb-6 bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-800">
    This feed loads more posts automatically as you scroll down. It uses the
    <strong> IntersectionObserver(built-in browser API) </strong> to detect when the “Loading more...” section
    comes into view, then fetches new posts dynamically.
  </div>

  {/* Posts List */}
  <ul className="space-y-4">
    {posts.map((post, idx) => (
      <li
        key={idx}
        className="bg-white p-4 rounded shadow hover:shadow-md transition duration-300"
      >
        {post}
      </li>
    ))}
  </ul>

  {/* Loader Div */}
  <div
    ref={loaderRef}
    className="h-16 mt-10 flex justify-center items-center text-gray-500 text-sm"
  >
    <span>Loading more...</span>
  </div>
</div>

  );  
};

export default infiniteScrolling;
