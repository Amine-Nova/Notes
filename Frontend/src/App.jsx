import { createCookie } from 'react-router';
import './App.css'
import Login from "./components/login"
import Register from "./components/register"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/home"

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  )
}
export default App
