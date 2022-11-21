require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Myth of Albion`,
    siteUrl: `https://mythofalbion.com`,
    description: `Myth of Albion`,
    author: `West Forge Ltd.`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-background-image",
    "gatsby-transformer-sharp",
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.DIRECTUS_URL,
        auth: {
          token: process.env.DIRECTUS_TOKEN,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
  ],
}
