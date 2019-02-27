module.exports = {
  pathPrefix: `/WISS2019Travis`,
  siteMetadata: {
    title: `WISS 2019`,
    description: `WISS 2019.`,
    author: `WISS 2019実行委員会`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/markdowns`,
      },
    },
  ],
}
