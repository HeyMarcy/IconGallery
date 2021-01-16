module.exports = {
  siteMetadata: {
    title: `Icon Gallery`,
    description: `Specializing in limited-edition fine art music photography`,
    author: `Marcy Montross`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `gatsby-starter-default`,
        // short_name: `starter`,
        // start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

// export default {
//   pathPrefix: '/pizza',
//   siteMetadata: {
//     title: `Slicks Slices`,
//     siteUrl: 'https://gatsby.pizza',
//     description: 'The best pizza place in Hamilton!',
//     twitter: '@slicksSlices',
//   },
//   plugins: [
//     'gatsby-plugin-react-helmet',
//     'gatsby-plugin-styled-components',
//     {
//       // this is the name of the plugin you are adding
//       resolve: 'gatsby-source-sanity',
//       options: {
//         projectId: '0jfvvkkd',
//         dataset: 'production',
//         watchMode: true,
//         token: process.env.SANITY_TOKEN,
//       },
//     },
//   ],
// };
