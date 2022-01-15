import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"

export default function Cv({ data }) {
    return (
        <Layout>
            <Seo title="CV" />
            <div className="section pt-5 pb-0">
                <nav
                    className="breadcrumb is-centered pt-6"
                    aria-label="breadcrumbs"
                >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/">CV</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="container py-5">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <div className="timeline is-centered">
                                <header className="timeline-header">
                                    <span className="tag is-large is-link">
                                        Education
                                    </span>
                                </header>
                                <div className="timeline-item">
                                    <div className="timeline-marker is-image is-48x48">
                                        <Img
                                            fixed={
                                                data.hus.childImageSharp.fixed
                                            }
                                        />
                                    </div>
                                    <div className="timeline-content pl-6">
                                        <p className="heading">09/2012 - 06/2020</p>
                                        <p>Humboldtschule Bad Homburg</p>
                                        <ul>
                                            <li>
                                                German High School Diploma
                                                (Abitur)
                                            </li>
                                            <li>GPA: 1.1 (Germany)</li>
                                            <li>Main Subjects: Math, Latin</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker is-image is-48x48">
                                        <Img
                                            fixed={
                                                data.dhbw.childImageSharp.fixed
                                            }
                                        />
                                    </div>
                                    <div className="timeline-content pr-6">
                                        <p className="heading">since 10/2020</p>
                                        <p>
                                            Baden-Wuerttemberg Cooperative State
                                            University Stuttgart (DHBW)
                                        </p>
                                        <ul className="has-text-left">
                                            <li>B.Sc. in Computer Science</li>
                                            <li>current GPA: 1.4 (Germany)</li>
                                            <li>
                                                Focus area ”Computational Data
                                                Science”
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <header className="timeline-header mb-4">
                                    <span className="tag is-link">Now</span>
                                </header>
                            </div>

                            <div className="timeline is-centered mt-6">
                                <header className="timeline-header">
                                    <span className="tag is-large is-primary">
                                        Experience
                                    </span>
                                </header>
                                <div className="timeline-item">
                                    <div className="timeline-marker is-image is-48x48">
                                        <Img
                                            fixed={
                                                data.ibm.childImageSharp.fixed
                                            }
                                        />
                                    </div>
                                    <div className="timeline-content pl-6">
                                        <p className="heading">since 09/2020</p>
                                        <p>IBM Deutschland GmbH</p>
                                        <ul>
                                            <li>Corporate Student</li>
                                            <li>Internships at </li>
                                            <ul>
                                                <li>IBM Cloud - Code Engine</li>
                                                <li>IBM Systems - Performance for Linux on Z</li>
                                                <li>IBM Consulting - GBS Watson IoT Practice</li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                                <header className="timeline-header">
                                    <span className="tag is-primary">Now</span>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query Icons {
        dhbw: file(relativePath: { eq: "dhbw.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        hus: file(relativePath: { eq: "hus.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        ibm: file(relativePath: { eq: "ibm.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
