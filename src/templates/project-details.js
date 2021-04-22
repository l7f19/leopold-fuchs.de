import React from 'react'
//import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Seo title={title} />
            <div className="section pt-4 pb-0">
                <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li class="is-active"><Link to="/">{title}</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div>
                    {/*<Img fluid={featuredImg.childImageSharp.fluid} />*/}
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
  `