import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Cv() {
    return (
        <Layout>
            <Seo title="CV" />
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb is-centered pt-6" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><Link to="/">CV</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="container py-5">
                    <h1>CV page</h1>
                    <div class="timeline is-centered">
                        <header class="timeline-header">
                            <span class="tag is-medium is-primary">Start</span>
                        </header>
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                            <p class="heading">January 2016</p>
                            <p>Timeline content - Can include any HTML element</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker is-image is-32x32">
                            <img src="https://bulma.io/images/placeholders/32x32.png" />
                            </div>
                            <div class="timeline-content">
                            <p class="heading">February 2016</p>
                            <p>Timeline content - Can include any HTML element</p>
                            </div>
                        </div>
                        <header class="timeline-header">
                            <span class="tag is-primary">2017</span>
                        </header>
                        <div class="timeline-item">
                            <div class="timeline-marker is-icon">
                            <i class="fa fa-flag"></i>
                            </div>
                            <div class="timeline-content">
                            <p class="heading">March 2017</p>
                            <p>Timeline content - Can include any HTML element</p>
                            </div>
                        </div>
                        <div class="timeline-header">
                            <span class="tag is-medium is-primary">End</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
