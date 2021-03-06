module.exports = {
  siteMetadata: {
    title: 'Dillon Morris - Front End Developer',
    author: 'Dillon Morris',
    siteUrl: 'https://www.dillonmorris.me/',
    description: 'Dillon is a Front End Developer specializing in UI/UX Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Space Mono\:400,700`, `PT Serif\:500, 700,`],
        display: 'swap',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dillon Morris UI/UX Designer & Developer',
        short_name: 'Dillon',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#11181E',
        display: 'minimal-ui',
        icon: './src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-netlify',
  ],
}
