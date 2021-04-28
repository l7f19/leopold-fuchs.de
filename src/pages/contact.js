import React from 'react'
import { Link } from 'gatsby'
import emailjs from 'emailjs-com'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Textfield } from '../components/textfield'


export default function Contact() {

    const validate = yup.object({
        name: yup.string().required('This field is required!'),
        mail: yup.string().email('Please enter a valid e-mail address!').required('This field is required!'),
        subject: yup.string().required('This field is required!'),
        message: yup.string().required('This field is required!'),
        accept: yup.bool().oneOf([true], 'You have to agree to the privacy policy!')
    })
    
    const submitHandler = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_o3d5yxn', 'template_e2pk97l', e.target, 'user_bDbMugp8DH1QCr8vtzlMw')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          });
        e.target.reset()
    }
    

    return (
        <Layout>
            <Seo title="Contact" />
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb is-centered pt-6" aria-label="breadcrumbs">
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

                    <Formik 
                        validationSchema={validate}
                        initialValues={{
                            name: "",
                            mail: "",
                            subject: "",
                            message: "",
                            accept: false,
                        }}
                    >
                        {({dirty, isValid})=> (
                            <Form onSubmit={submitHandler} className="columns is-centered">
                                <div className="column is-two-thirds">
                                    <Textfield label="Name" type="text" name="name" placeholder="e.g. Alex Smith" />
                                    <Textfield label="E-Mail" type="text" name="mail" placeholder="e.g. alexsmith@gmail.com" />
                                    <Textfield label="Subject" type="text" name="subject" placeholder="e.g. My message to you" />
                                    <Textfield label="Message" type="text" name="message" placeholder="e.g. Hello world" />
                                    <div class="field pt-2">
                                        <label class="checkbox">
                                            <Field type="checkbox" name="accept" className="mr-3" />I agree to the <a href="/privacy" target="_blank">privacy policy</a>
                                        </label>
                                        <p class="help is-danger"><ErrorMessage name="accept" /></p>
                                    </div>
                                    <div class="field pt-3">
                                        <div class="control">
                                            <div className="buttons is-centered">
                                                <button class="button is-link is-outlined" type="submit" disabled={!dirty || !isValid}><div className="pr-5"></div>Send Message<div className="pl-5"></div></button>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Layout>
    )
}
