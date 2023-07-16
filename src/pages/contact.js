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

export const Head = () => (
  <Seo
    title="Contact page"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world."
  />
);


export default ContactPage