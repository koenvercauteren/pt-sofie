module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sofiedb.be',
  },
  plugins: [
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
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
