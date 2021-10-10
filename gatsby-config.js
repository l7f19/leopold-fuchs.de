module.exports = {
    siteMetadata: {
        title: `Leopold Fuchs`,
        description: `Hi! I'm Leopold, a computer science student based in Stuttgart, Germany.`,
        url: "https://leopold-fuchs.de",
        author: `Leopold Fuchs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
                trackingIds: ["G-V7ZESHSJ0H"],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
}
