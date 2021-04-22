import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Cv() {
    return (
        <Layout>
            <Seo title="CV" />
            <div className="section pt-4 pb-0">
                <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li class="is-active"><Link to="/">CV</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h1>CV page</h1>
            </div>
        </Layout>
    )
}
