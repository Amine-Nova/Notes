import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css'
import { FaRegUser } from "react-icons/fa6";
import { LuLock } from "react-icons/lu";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setError("Passwords don't match!");
          return;
        }
        const userData = {
            username,
            password,
        };
        try {
            const response = await axios.post('http://127.0.0.1:8080/signup/', userData);
            console.log('Registration successfull:', response.data);
            navigate('/login');
          } catch (err) {
            console.error('Error', err);
            setError('Registration failed');
          }
    };
    return (
        <div className='bo'>   
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <FaRegUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <LuLock className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        <LuLock className='icon'/>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type='submit' class="ml-20 font-semibold text-2xl">Sign Up</button>
                    <div className="register-link">
                        Already have an account? <NavLink to="/login">Login</NavLink>

                    </div>
                </form>
            </div>
        </div>
    )

}

export default Register
