import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default function Home({ data }) {
    return (
        <Layout>
            <h1 class="title">
                Home
            </h1>
            <Img fluid={data.file.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
    query Banner {
        file(relativePath: {eq: "banner.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`