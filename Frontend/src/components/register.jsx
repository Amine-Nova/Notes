import React from 'react'
import { NavLink } from "react-router";
import './login.css'
import { FaRegUser } from "react-icons/fa6";
import { LuLock } from "react-icons/lu";

const Register = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign In</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaRegUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <LuLock className='icon'/>
                </div>
                <button type='submit'>Sign In</button>
                <div className="register-link">
                    Already have an account? <NavLink to="/login">Login</NavLink>

                </div>
            </form>
        </div>
    )
}

export default Register
