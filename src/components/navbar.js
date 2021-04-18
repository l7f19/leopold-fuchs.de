import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <h1>Leopold Fuchs</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/cv">CV</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
