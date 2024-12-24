import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import TodoForm from "./pages/todoForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<TodoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
