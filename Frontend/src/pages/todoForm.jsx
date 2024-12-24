import React, { useState } from "react"
import '../index.css'
import './todo.css'

const TodoForm = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");


    const addTodo = () => {
        if (input.trim()) {
            setTodo([...todo, {id: Date.now(), text:input, completed:false}])
            setInput("")
        }
    }
    return (
        <div className="bt">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-black bg-opacity-60 shadow-lg p-16 border border-white">
                    <h1 className="text-white text-4xl font-bold text-center text mb-6">Todo List</h1>
                        <div className="mb-4 flex">
                        <input type="text"  className="bg-black bg-opacity-10 text-red-50 px-8 border rounded-l-lg focus:outline-none focus:ring-white" placeholder="Todo"/>
                    <button onClick={addTodo} className="bg-black text-white px-4 py2 rounded-r-lg hover:bg-zinc-800">Add</button>
                    </div>
                    <ul className="space-y-2">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoForm