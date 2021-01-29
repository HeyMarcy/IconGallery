import React from 'react';
import { graphql, Link } from 'gatsby';

import Img from 'gatsby-image';
import styled from 'styled-components';

export default function PhotoPage({ data }) {
  return (
    <div>
      <Img fluid={data.photo.photograph.asset.fluid} />
      <h1>{data.photo.name}</h1>
      <p>by {data.photo.photographer.name}</p>
      <p>{data.photo.location}</p>
      <p>{data.photo.year}</p>
    </div>
  );
}

// change query from slug to id?
// research GatsbySanityImage

export const query = graphql`
  query($slug: String!) {
    photo: sanityPhoto(slug: { current: { eq: $slug } }) {
      name
      id
      slug {
        current
      }
      photographer {
        name
      }
      location
      year
      photograph {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
