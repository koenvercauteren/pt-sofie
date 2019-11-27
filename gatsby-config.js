module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sofiedb.be',
  },
  plugins: [
    // gtag
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['AW-769883402'],
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
