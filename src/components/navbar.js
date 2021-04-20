import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false)
    
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand m-0 p-0">
                <Link className="ml-2 mt-1" to="/">      
                    <Img
                        fixed={data.file.childImageSharp.fixed}
                        alt=""
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