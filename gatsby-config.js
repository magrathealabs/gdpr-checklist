module.exports = {
  siteMetadata: {
    title: 'The GDPR Checklist',
    siteUrl: 'https://lgpd-checklist.magrathealabs.com'
  },
  pathPrefix: "/lgpd-checklist",
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lgpd-checklist.magrathealabs.com',
        sitemap: 'https://lgpd-checklist.magrathealabs.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-113160447-1'
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};
