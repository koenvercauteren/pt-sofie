module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:9000',
  },
  plugins: [
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128097835-1',
        head: false,
      },
    },

    // Sitemap
    { resolve: 'gatsby-plugin-sitemap' },

    // Style
    'gatsby-plugin-sass',
    { resolve: 'gatsby-plugin-material-ui' },

    // other
    'gatsby-plugin-react-helmet',
  ],
};
