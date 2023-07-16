import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="About Me"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world."
  />
);

export default AboutPage