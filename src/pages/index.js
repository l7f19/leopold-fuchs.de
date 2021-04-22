import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Seo from '../components/seo'

export default function Home({ data }) {
    return (
        <Layout>
            <Seo title="Home" />
            <div class="columns is-gapless">
                <div className="column">
                    <section class="hero is-fullheight is-link">
                        <div class="hero-body">
                            <div class="container has-text-centered">
                                <p class="title is-1 pb-6">
                                    Hi! I'm Leopold, a computer science student currently based in Stuttgart, Germany.
                                </p>
                                <p class="title is-3 mt-6">
                                   At Baden-Wuerttemberg Cooperative State University Stuttgart I'm learning the required theoretical knowledge and I also gain practical experience working at IBM.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="column">
                    <section class="hero is-fullheight is-primary">
                        <div class="hero-body">
                            <div class="container has-text-centered">
                                <p class="title is-3 mb-6">
                                    I'm interested in fullstack web/app development. Frameworks that I'm working with are React, Gatsby and React Native for frontend and Express and MongoDB for backend development.
                                </p>
                                <p class="title is-1 pt-6">
                                    On this website I want to show something <Link className="keyword" to="/cv">about me</Link> and <Link className="keyword" to="/projects">projects</Link> that I'm working on.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}