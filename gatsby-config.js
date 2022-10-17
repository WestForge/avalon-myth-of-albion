require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Myth of Albion`,
    siteUrl: `https://mythofalbion.com`,
    description: `Myth of Albion`,
    author: `@gatsbyjs`,
    social: {
      twitter: `missing`,
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-background-image",
    "gatsby-transformer-sharp",
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
    },
  },
  {
    resolve: "@directus/gatsby-source-directus",
    options: {
      url: process.env.GATSBY_DIRECTUS_URL,
      auth: {
        token: process.env.GATSBY_TOKEN,
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
