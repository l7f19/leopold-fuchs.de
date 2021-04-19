import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    const projects = data.allMarkdownRemark.nodes
    console.log(data)

    return (
        <Layout>
            <h1 class="title">
                Projects
            </h1>
            <div>
                {projects.map(project => (
                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                        <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                        <h3>{project.frontmatter.title}</h3>
                    </Link>
                ))}
            </div>
        </Layout>
            
    )
}

export const query = graphql`
    query Projects {
        allMarkdownRemark(sort: {fields: frontmatter___slug, order: ASC}) {
            nodes {
                frontmatter {
                    slug
                    stack
                    title
                    thumb {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                      }
                }
                id
            }
        }
    }
`
