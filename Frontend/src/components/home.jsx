import React from 'react'
import { NavLink } from "react-router";
import './login.css'
import './home.css'

const Home = () => {
    return (
        <div className='wrapper'>
            <form action="/login">
                <h1>Welcome</h1>
                <div>
                <button class='btn'>Get Started</button>
                </div>
            </form>
        </div>
    )
}

export default Home
