import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>ContactPage</title>

export default ContactPage