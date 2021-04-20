import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <div className="section pt-4 pb-0">
                <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li class="is-active"><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h1>Contact page</h1>
            </div>
        </Layout>
    )
}
