import React from 'react'
import Layout from '../components/layout'

export default function Home({ data }) {
    return (
        <Layout>
            <div class="columns is-gapless">
                <div className="column">
                    <section class="hero is-fullheight is-link">
                        <div class="hero-body">
                            <div class="container has-text-centered">
                                <p class="title is-1 pb-6">
                                    Hi! I'm Leopold, a computer science student currently based in Stuttgart, Germany.
                                </p>
                                <p class="title is-3 mt-6">
                                   I learn the theoretical knowledge at Baden-Wuerttemberg Cooperative State University Stuttgart but also gain much practical experience working at IBM.
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
                                    I am interested in fullstack web / app development. Frameworks that I'm working with are React, Gatsby and React Native for frontend and Express and MongoDB for backend.
                                </p>
                                <p class="title is-1 pt-6">
                                    On this website I want to show something about me and projects that I'm working on.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}