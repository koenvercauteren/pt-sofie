module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sofiedb.be',
  },
  plugins: [
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117941537-1',
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
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
