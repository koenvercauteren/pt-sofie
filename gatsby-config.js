module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:9000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
  ],
};
