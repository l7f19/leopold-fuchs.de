import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false)

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            github: file(relativePath: { eq: "github.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            linkedin: file(relativePath: { eq: "linkedin.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand m-0 p-0">
                <Link className="ml-2 mt-1" to="/">
                    <Img fixed={data.logo.childImageSharp.fixed} alt="" />
                </Link>
                <div
                    onClick={() => {
                        setisActive(!isActive)
                    }}
                    role="button"
                    tabIndex={0}
                    className={`navbar-burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    aria-hidden="true"
                    data-target="navMenu"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div
                id="navMenu"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >
                <div className="navbar-end">
                    <div className="navbar-item m4-6">
                        <Link to="/" className="navbar-item is-tab px-5">
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className="navbar-item is-tab px-5"
                        >
                            Projects
                        </Link>
                        <Link to="/cv" className="navbar-item is-tab px-5">
                            CV
                        </Link>
                        <Link to="/contact" className="navbar-item is-tab px-5">
                            Contact
                        </Link>
                    </div>
                    <a
                        href="https://github.com/l7f19"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4"
                    >
                        <Img
                            fixed={data.github.childImageSharp.fixed}
                            alt="GitHub"
                            className="icon-center"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/leopoldfuchs"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-4"
                    >
                        <Img
                            fixed={data.linkedin.childImageSharp.fixed}
                            alt="LinkedIn"
                            className="icon-center"
                        />
                    </a>
                </div>
            </div>
        </nav>
    )
}
