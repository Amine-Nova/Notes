import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css'
import { FaRegUser } from "react-icons/fa6";
import { LuLock } from "react-icons/lu";

const Login = () => {
    const [username, getUsername] = useState('');
    const [password, getPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username,
            password,
        };
        try {
            const response = await axios.post('http://127.0.0.1:8080/login/', userData);
            console.log('Login successfull:', response.data);
            navigate('/todo');
          } catch (err) {
            console.error('Error', err);
            setError('Login failed');
          }
    };
    return (
        <div className='bo'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' value={username} onChange={(e) => getUsername(e.target.value)} required/>
                        <FaRegUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => getPassword(e.target.value)} required/>
                        <LuLock className='icon'/>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type='submit' class="ml-20 font-semibold text-2xl">Login</button>
                    <div className="register-link">
                        Don't have an account? <NavLink to="/register">Register</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
