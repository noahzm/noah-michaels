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
        background_color: `#F3F4F6`,
        theme_color: `#F3F4F6`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
