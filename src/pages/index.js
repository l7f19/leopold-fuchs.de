import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Seo from '../components/seo'

export default function Home({ data }) {
    return (
        <Layout>
            <Seo title="Home" />
                <section class="hero is-fullheight is-link">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <p class="title is-1 pb-6">
                                Hi! I'm Leopold, a computer science student based in Stuttgart, Germany.
                            </p>
                            <p class="title is-2 mt-6">
                                As a corporate student I'm ...
                            </p>
                            <p className="title is-3 mt-6">
                                <div class="columns">
                                    <div className="column">
                                        studying at Baden-Wuerttemberg Cooperative State University Stuttgart.
                                    </div>
                                    <div className="column">
                                        gaining practical experience working every semester within an internship at IBM.
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="hero is-fullheight is-primary">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <p class="title is-1 pb-6">
                                On this website I want to show something <Link className="keyword" to="/cv">about me</Link> and <Link className="keyword" to="/projects">projects</Link> that I'm working on.
                            </p>
                            <p class="title is-2 pt-5 pb-4">
                                I'm interested in fullstack web/app development and thereby mainly working with following technologies:
                            </p>

                            <p class="title is-2">
                                React (Native) | Gatsby | ExpressJS | Google Firebase
                            </p>
                             
                        </div>
                    </div>
                </section>

        </Layout>
    )
}