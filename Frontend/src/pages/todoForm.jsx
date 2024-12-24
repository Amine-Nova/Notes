import React, { useState } from "react"
import '../index.css'
import './todo.css'

const TodoForm = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
  
    const addTodo = () => {
      if (input.trim()) {
        setTodo([
          ...todo,
          { id: Date.now(), text: input, completed: false }
        ]);
        setInput('');
      }
    };
  
    const toggleCompletion = (id) => {
      setTodo(todo.map((t) => (
        t.id === id ? { ...t, completed: !t.completed } : t
      )));
    };
  
    const deleteTodo = (id) => {
      setTodo(todo.filter((t) => t.id !== id));
    };
  
    return (
        <div className="bt">
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-black bg-opacity-60 shadow-lg p-16 border border-white w-[700px] h-[800px]">
              <h1 className="text-white text-5xl font-bold text-center text mb-6">Todo List</h1>
              <div className="mb-4 flex justify-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  className="bg-black bg-opacity-10 text-red-50 px-5 w-[500px] border rounded-l-lg focus:outline-none focus:ring-white"
                  placeholder="Todo"
                />
                <button
                  onClick={addTodo}
                  className="bg-black text-white w-[100px] rounded-r-lg hover:bg-zinc-800"
                >
                  Add
                </button>
              </div>
              <ul className="space-y-2">
                {todo.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center p-3 rounded-lg bg-zinc-800 bg-opacity-30  border border-gray-200"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleCompletion(todo.id)}  // Corrected the toggle logic
                      className="mr-2 h-5 w-5"
                    />
                    <span
                      className={`flex-grow ${todo.completed ? 'm-50 line-through text-2xl font-semibold text-gray-500' : 'text-2xl font-semibold text-white'}`}
                    >
                      {todo.text}
                    </span>
                    <button
                    onClick={() => deleteTodo(todo.id)}
                    className="h-20 w-20 ml-2 bg-black font-mono text-l text-white rounded-md hover:bg-zinc-800">Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
}

export default TodoForm