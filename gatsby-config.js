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
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "24sgmo6I9ATxgLnieYMr_dEKbr6n8UzqzF5uUSv_q7s",
        spaceId: "gq3hbfio0s38",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-RXWZ91DS6S",
      },
    },
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
