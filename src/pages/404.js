import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function NotFound() {
    return (
        <Layout>
            <Seo title="404 - not found" />
            <div className="section pt-5 pb-0">
                <nav className="breadcrumb is-centered pt-6" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><Link to="/">404</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="container has-text-centered py-5">
                    <p className="subtitle is-3 mt-5">Error 404 - not found</p>
                    <h1 className="title is-2">Sorry, that page doesn't exist.</h1>
                    <Link to="/"><button className="button is-link is-rounded">Back to he Homepage</button></Link>
                </div>
            </div>
        </Layout>
    )
}
