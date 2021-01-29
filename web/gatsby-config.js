import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Icon Gallery',
    siteURL: 'icongallery.com',
    description: 'Specializing in limited edition fine art music photography.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1q2c3ohm',
        dataset: 'develop',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
