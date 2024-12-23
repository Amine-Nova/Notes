import React from 'react'
import './login.css'
import { NavLink } from "react-router";
import {FaRegUser } from "react-icons/fa6";
import { LuLock } from "react-icons/lu";

const Login = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaRegUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <LuLock className='icon'/>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    Don't have an account? <NavLink to="/register">Register</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login
