import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact page" />

export default ContactPage