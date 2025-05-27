"use client";
import React, { useState, useEffect } from "react";

export default function debounce() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => clearTimeout(timeout); // This is a cleanup function. If the user types again before 500ms, the previous timeout is cancelled.
  }, [query]);

  // For API call
  useEffect(() => {
    if (debouncedQuery) {
      console.log(`Searching for: ${debouncedQuery}`);
      //   fetch(`/api/search?query=${debouncedQuery}`)  // Imagine an API call here
    }
  }, [debouncedQuery]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">🔍 Debounced Search</h1>
      <h2 className="text-2xl font-medium mb-6 text-gray-300">
        Many E-commerce websites use debouncing to reduce API calls during
        search.
      </h2>

      <div className="relative max-w-2xl w-full">
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-600 bg-gray-800 text-white p-4 pl-5 rounded-lg w-full text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>

      <p className="mt-6 text-gray-400 text-lg">
        Searching for:{" "}
        <span className="font-semibold text-white">{debouncedQuery}</span>
      </p>
    </div>
  );
}
