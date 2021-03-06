import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import Seo from "../components/seo"

export default function Home({ data }) {
    return (
        <Layout>
            <Seo title="Home" />
            <section className="hero is-fullheight is-link" id="first">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title is-1 pb-6 pt-6">
                            Hi! I'm Leopold,
                            <br />
                            <span className="title is-2">
                                a computer science student based in Stuttgart.
                            </span>
                        </p>
                        <p className="title is-2 mt-6 pt-5">
                            As a corporate student I'm ...
                        </p>
                        <p className="title is-4 mt-6">
                            <div className="columns">
                                <div className="column">
                                    <span className="material-icons md-36">
                                        school
                                    </span>
                                    <br />
                                    studying at Baden-Wuerttemberg Cooperative
                                    State University Stuttgart.
                                </div>
                                <div className="column">
                                    <span className="material-icons md-36">
                                        code
                                    </span>
                                    <br />
                                    gaining practical experience working every
                                    semester within an internship at IBM.
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="hero-foot has-text-centered pb-6">
                    <ScrollLink to="second" spy={true} smooth={true}>
                        <span className="material-icons md-80 indicator-up">
                            expand_more
                        </span>
                    </ScrollLink>
                </div>
            </section>
            <section className="hero is-fullheight is-primary" id="second">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title is-2 pb-6 pt-6">
                            Here you can find out more{" "}
                            <Link className="keyword" to="/cv">
                                about me
                            </Link>{" "}
                            and{" "}
                            <Link className="keyword" to="/projects">
                                projects
                            </Link>{" "}
                            that I'm working on.
                        </p>
                        <p className="title is-3 pt-6 pb-4">
                            I'm interested in fullstack web development +
                            machine learning and thereby mainly working with
                            following technologies:
                        </p>
                        <div className="columns mt-5">
                            <div className="column tags is-justify-content-center mb-0">
                                <div className="icon-center">
                                    <span className="tag is-primary is-light is-large mx-4">
                                        Angular
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4">
                                        React
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4">
                                        Gatsby
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        Node.js
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        Express.js
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        MongoDB
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        Bootstrap
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        Bulma CSS
                                    </span>
                                </div>
                            </div>
                            <div className="column tags is-justify-content-center">
                                <div className="icon-center">
                                    <span className="tag is-primary is-light is-large mx-4">
                                        Python
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4">
                                        scikit-learn
                                    </span>
                                    <br />
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        TensorFlow
                                    </span>
                                    <span className="tag is-primary is-light is-large mx-4 mt-3">
                                        PyTorch
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot has-text-centered pb-6">
                    <ScrollLink to="first" spy={true} smooth={true}>
                        <span className="material-icons md-80 indicator-up">
                            expand_less
                        </span>
                    </ScrollLink>
                </div>
            </section>
        </Layout>
    )
}
