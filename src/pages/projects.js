import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    const projects = data.projects.nodes

    return (
        <Layout>
            <Seo title="Projects" />
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb is-centered pt-6" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><Link to="/">Projects</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="container pt-5">
                    {projects.map((project, index) => (
                        <div className="tile is-ancestor pb-6 pt-5">
                            <div className="tile is-vertical">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className={`tile is-child notification ${index%2===0 ? "is-link": "is-primary"}`}>
                                            <div className="columns">
                                                <div className="column is-10">
                                                    <p className="subtitle pb-1">Title</p>
                                                    <p className="title is-4">{project.frontmatter.title}</p>
                                                </div>
                                                <div className="column">
                                                <a href={project.frontmatter.link} alt="GitHub" target="_blank" rel="noreferrer">
                                                    <Img className="mt-3" fixed={data.icon.childImageSharp.fixed} />
                                                </a>
                                                </div>
                                            </div>       
                                        </article>
                                        <article className="tile is-child box">
                                            <p className="subtitle pb-1">Stack</p>
                                            <p className="title is-4">{project.frontmatter.stack}</p>  
                                        </article>
                                    </div>
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child box">
                                            <p className="subtitle pb-1">Type</p>
                                            <p className="title is-4">{project.frontmatter.type}</p>
                                        </article>
                                        <article className="tile is-child box">
                                            <p className="subtitle">Current progress</p>
                                            <progress className={`progress ${index%2===0 ? "is-primary": "is-link"}`} value={project.frontmatter.progress} max="100"></progress>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle">Description</p>
                                        <div dangerouslySetInnerHTML={{ __html: project.html }} />
                                    </article>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>  
            </div>
        </Layout>
    )
}

export const query = graphql`
    query Projects {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                html
                frontmatter {
                    title
                    stack
                    type
                    progress
                    date
                    link
                }
                id
            }
        }
        icon: file(relativePath: {eq: "github.png"}) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
