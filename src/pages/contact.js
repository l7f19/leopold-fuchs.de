import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Contact() {
    return (
        <Layout>
            <Seo title="Contact" />
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content pb-6">
                <div className="container">
                    <section class="hero has-text-centered">
                        <div class="hero-body">
                            <p class="title is-2">
                                You have a question or just want to get in touch?
                            </p>
                            <p class="subtitle is-2">
                                Don't hesitate to contact me!
                            </p>
                        </div>
                    </section>

                    <form
                        action="https://formspree.io/f/mpzkqaez"
                        method="POST"
                    >
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input is-hovered" type="text" name="name" placeholder="e.g Alex Smith" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input is-hovered" type="email" name="_replyto" placeholder="e.g. alexsmith@gmail.com" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea is-hovered" placeholder="e.g. Hello world"></textarea>
                            </div>
                        </div>

                        <div class="field pt-3">
                            <div class="control">
                                <div className="buttons is-centered">
                                    <Link to="/contact">
                                        <button class="button is-link is-outlined" type="submit"><div className="pr-5"></div>Send<div className="pl-5"></div></button>
                                    </Link>
                                </div>
                            </div> 
                        </div>
                    </form>

                </div>
            </div>
        </Layout>
    )
}
