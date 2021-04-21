module.exports = {
  siteMetadata: {
    title: `Leopold Fuchs`,
    siteUrl: `https://www.leopold-fuchs.de`,
    description: `A personal portfolio website from Leopold Fuchs`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-V7ZESHSJ0H",
        ],
        pluginConfig: {
          head: true,
        }
      },
    }
  ]
}
