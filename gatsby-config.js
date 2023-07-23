/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://news9main.gatsbyjs.io/`,
    title: "News 9",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        clarity_project_id: "hzye4qgsux",
        enable_on_dev_env: true,
      },
    },
  ],
}
