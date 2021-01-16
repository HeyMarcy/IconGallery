import React from 'react';
import Layout from './src/components/Layout';

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement
// note: no default export

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
