import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="left">
                    <Link to="/" ><h1>E-Commerce</h1></Link>
                </div>
                <div className="mid">
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/cart">Cart</Link> </li>
                        <li> <Link to="/blog">Blogs</Link> </li>
                    </ul>
                </div>
                <div className="right">
                    <SlBasket size={30} />
                </div>
            </div>

        </>
    )
}

export default Navbar