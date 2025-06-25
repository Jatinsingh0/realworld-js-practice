"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const FeedbackCollector = () => {
  const [feedBacks, setFeedBacks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const newFeedBack = {
      id: Date.now(),
      text: input.trim(),
      createdAt: Date.now(),
    };
    setFeedBacks([...feedBacks, newFeedBack]);
    setInput("");
  };

  const handleDelete = (id) => {
    const updated = feedBacks.filter((item) => item.id !== id);
    setFeedBacks(updated);
    localStorage.setItem("userFeedBacks", JSON.stringify(updated));
  };

  useEffect(() => {
    const stored = localStorage.getItem("userFeedBacks");
    if (stored) {
      setFeedBacks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userFeedBacks", JSON.stringify(feedBacks));
  }, [feedBacks]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📝 Share Your Feedback
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Type your feedback here..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700 placeholder:text-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md"
          >
            Submit
          </button>
        </div>

        <div className="space-y-4">
          {feedBacks.length === 0 ? (
            <div className="text-center text-gray-500 italic">
              No feedback yet. Be the first to share your thoughts!
            </div>
          ) : (
            <ul className="space-y-4">
              {feedBacks.map((feedBack) => (
                <li
                  key={feedBack.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-start hover:shadow-md transition"
                >
                  <div>
                    <p className="text-gray-800 text-lg font-medium">
                      {feedBack.text}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {dayjs(feedBack.createdAt).fromNow()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(feedBack.id)}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCollector;
