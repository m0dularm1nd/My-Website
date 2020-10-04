module.exports = {
  siteMetadata: {
    title: `MindScape`,
    description: `New Horizions`,
    author: `Mohamed Gamal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-small.gif`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "26oss0q2rua8",
        accessToken: "aQ6zEYvUOeydMlDyrsCZMZOpv9nZs8lE585j0JLFpH4",
      },
    },
  ],
}
