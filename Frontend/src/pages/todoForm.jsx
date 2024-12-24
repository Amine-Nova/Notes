import React, { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import '../index.css'
import './todo.css'

const TodoForm = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodo(savedTodos);
        }
    }, []);
    
    useEffect(() => {
        if (todo.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todo));
        }
    }, [todo]);
    
    const addTodo = () => {
        if (input.trim()) {
            const newTodo = {
                id: Date.now(),
                text: input,
                completed: false,
            };
            setTodo([...todo, newTodo]);
            setInput('');
        }
    };
    
    const toggleCompletion = (id) => {
        setTodo(todo.map((t) => (
            t.id === id ? { ...t, completed: !t.completed } : t
            )));
        };
        
        const deleteTodo = (id) => {
            const updatedTodos = todo.filter((t) => t.id !== id); 
            setTodo(updatedTodos);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
        };
        const logout = () => {
            setTodo([]);
            localStorage.removeItem('todos');
            navigate('/');
        };
        return (
            <div className="bt">
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-black bg-opacity-60 shadow-lg p-16 border border-white w-[700px] h-[800px]">
            <button
                onClick={logout}
                className="text-2xl font-semibold absolute w-[150px] top-5 right-5 bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800">
            Logout
            </button>
              <h1 className="text-white text-5xl font-bold text-center text mb-6">Get Things Done!</h1>
              <div className="mb-5 flex justify-center">
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
                      className={`flex-grow ${todo.completed ? 'm-50 line-through text-2xl font-semibold text-gray-500' : 'text-xl font-semibold text-white'}`}
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