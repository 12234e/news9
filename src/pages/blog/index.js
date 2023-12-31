import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Latest news">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => (
  <Seo
    title="Latest news"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world."
  />
);


export default BlogPage
