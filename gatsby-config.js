module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:9000',
  },
  plugins: [
    // Sitemap
    {
      resolve: 'gatsby-plugin-sitemap',
    },

    // Style
    'gatsby-plugin-sass',

    // other
    'gatsby-plugin-react-helmet',
  ],
};
