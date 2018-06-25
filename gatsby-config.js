module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:9000',
  },
  plugins: [
    // Files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'content',
      },
    },

    // Parse all markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
        ],
      },
    },

    // Sitemap
    {
      resolve: 'gatsby-plugin-sitemap',
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,

    // Style
    'gatsby-plugin-sass',

    // other
    'gatsby-plugin-react-helmet',
  ],
};
