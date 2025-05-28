'use client';
import { useState, useEffect } from 'react';

const LocalStorageNotesList = () => {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);

   // Load notes from localStorage
  useEffect(()=>{
   const saved = localStorage.getItem("savedNotes");
   if(saved){
      setNotes(JSON.parse(saved));  // Converting JSON string back to array.
   }
  }, []);

    // Save notes to localStorage whenever they change
  useEffect(()=>{
   localStorage.setItem("savedNotes", JSON.stringify(notes))
  }, [notes])


  const handleAddNote = () => {
    if(input.trim()){
        setNotes(prev => [...prev, input]);
        setInput("");
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white border border-gray-200 rounded-2xl shadow-md space-y-6">
  <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
    📝 Your Notes
  </h2>

  <textarea
  value={input}
  onChange={(e) => setInput(e.target.value)}
  rows={4}
  className={`w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    input ? 'text-blue-600' : 'text-gray-800'
  }`}
  placeholder="Write and keep your Notes"
/>


  <button
    onClick={handleAddNote}
    className="bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors pointor"
  >
    Add Note
  </button>

  <div className="border-t pt-4">
    <p className="text-sm text-gray-500 mb-2">Your notes are saved in your browser!</p>
    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
     {notes.length > 0 ? (
        notes.map((n, i) => <li key={i}>{n}</li>)
      ) : (
        <p className="text-gray-400 italic">No notes yet...</p>
      )}
    </ul>
  </div>
</div>

  );
};

export default LocalStorageNotesList;
