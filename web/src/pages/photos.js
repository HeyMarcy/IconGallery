import React from 'react';
import { graphql } from 'gatsby';
import PhotosList from '../components/PhotosList';
import PhotoFilter from '../components/PhotoFilter';

export default function PhotosPage({ data }) {
  console.log(data.photos);
  const photos = data.photos.nodes;
  return (
    <div>
      <PhotoFilter />
      <PhotosList photos={photos} />
    </div>
  );
}

export const query = graphql`
  query PhotoQuery {
    photos: allSanityPhoto {
      nodes {
        id
        name
        slug {
          current
        }
        photographer {
          name
        }
        location
        year
        artist {
          name
        }

        photograph {
          asset {
            fixed(width: 400) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
