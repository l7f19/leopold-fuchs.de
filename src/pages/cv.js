import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Img from 'gatsby-image';

export default function Cv({ data }) {
    return (
        <Layout>
            <Seo title="CV" />
            <div className="section pt-5 pb-0">
                <nav className="breadcrumb is-centered pt-6" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><Link to="/">CV</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="container py-5">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <div class="timeline">
                                <header class="timeline-header">
                                    <span class="tag is-large is-link">Education</span>
                                </header>
                                <div class="timeline-item">
                                    <div class="timeline-marker is-image is-48x48">
                                        <Img fixed={data.hus.childImageSharp.fixed} />
                                    </div>
                                    <div class="timeline-content">
                                        <p class="heading">09/2012 - 06/2020</p>
                                        <p>Humboldtschule Bad Homburg</p>
                                        <ul>
                                            <li>German High School Diploma (Abitur)</li>
                                            <li>GPA 1.1 (Germany)</li>
                                        </ul>  
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-marker is-image is-48x48">
                                        <Img fixed={data.dhbw.childImageSharp.fixed} />
                                    </div>
                                    <div class="timeline-content">
                                        <p class="heading">09/2012 - 06/2020</p>
                                        <p>Baden-Wuerttemberg Cooperative State University Stuttgart</p>
                                        <ul>
                                            <li>B.Sc. in Computer Science</li>
                                            <li>GPA 1.1 (Germany)</li>
                                        </ul>
                                    </div>
                                </div>
                                <header class="timeline-header">
                                    <span class="tag is-link">Now</span>
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
        dhbw: file(relativePath: {eq: "dhbw.png"}) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        hus: file(relativePath: {eq: "hus.png"}) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`