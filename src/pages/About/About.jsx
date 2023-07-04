import React from "react"
import { Link, Outlet } from "react-router-dom"

export const About = () => (<div>
    <h1>About</h1>
    <ul>
        <li>
            <Link to="mission">
            Read about our Mission
            </Link>
        </li>
        <li>
            <Link to="team">
            Read about our Team
            </Link>
        </li>
        <li>
            <Link to="reviews">
            Read about our Reviews
            </Link>
        </li>
    </ul>
    <Outlet/>
</div>)