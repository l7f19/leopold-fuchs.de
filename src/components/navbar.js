import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt="Logo"
                        width="112"
                        height="28"
                    />
                </Link>
                <div
                    onClick={() => {
                        setisActive(!isActive)
                    }}
                    role="button"
                    className={`navbar-burger ${
                        isActive ? "is-active" : ""
                    }`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navMenu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/" className="navbar-item is-tab px-5">
                            Home
                        </Link>
                        <Link to="/projects" className="navbar-item is-tab px-5">
                            Projects
                        </Link>
                        <Link to="/cv" className="navbar-item is-tab px-5">
                            CV
                        </Link>
                        <Link to="/contact" className="navbar-item is-tab px-5">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
