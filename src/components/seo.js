import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <title>{title} | {data.site.siteMetadata.title}</title>
      <meta name="google-site-verification" content="4uwHS5szp90l6PvaAKK8q14YwUOP9BUC9CVjuJjfRwA" />
    </>
  )
}

export default Seo
