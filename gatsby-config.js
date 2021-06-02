module.exports = {
  siteMetadata: {
    title: "Noah Michaels",
    author: "Noah Michaels",
    siteUrl: "https://noah.icu",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Noah Michaels`,
        short_name: `Noah M`,
        start_url: `/`,
        background_color: `#0000FF`,
        theme_color: `#0000FF`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
  ],
};
