import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/global.scss'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div>
                { children }
            </div>
            <Footer />
        </div>
    )
}
