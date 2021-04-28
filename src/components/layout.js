import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/global.scss'

export default function Layout({ children }) {
    return (
        <div className="has-navbar-fixed-top footer-parent">
            <Navbar />
            <div>
                { children }
            </div>
            <Footer />
        </div>
    )
}
