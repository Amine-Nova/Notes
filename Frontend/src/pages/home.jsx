import React from 'react'
import { NavLink } from "react-router";
import './login.css'

const Home = () => {
    return (
        <div className='wrapper'>
            <form action="/login">
                <h1>Welcome</h1>
                <div>
                <button class='w-[300px] h-[80px] m-16 text-2xl font-semibold'>Get Started</button>
                </div>
            </form>
        </div>
    )
}

export default Home
