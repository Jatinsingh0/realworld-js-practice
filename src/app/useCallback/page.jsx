'use client'
import { useState, useCallback } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo) => {  // memoizes the function so it's not recreated on every render.
    setTodos((prev) => [...prev, todo]);   
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Todos</h2>
      <TodoInput onAdd={addTodo} /> 
      <ul className="list-disc pl-5">
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');
  return (
    <div className="flex gap-2 mt-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Add a todo"
      />
      <button
        onClick={() => {
          onAdd(value);  // triggers the addTodo function.
          setValue('');
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
