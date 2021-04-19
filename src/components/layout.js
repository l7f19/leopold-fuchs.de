import React from 'react'
import Navbar from '../components/navbar'
import '../styles/global.scss'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div>
                { children }
            </div>
            <footer>
                <p>Copyright 2021 Leopold Fuchs</p>
            </footer>
        </div>
    )
}
